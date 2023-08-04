import decode from 'jwt-decode';

const TOKEN_KEY = 'my_app_token';
class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp * 1000 < Date.now() ;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  login(idToken) {
    localStorage.setItem(TOKEN_KEY, idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    window.location.assign('/');
  }
}

const authService = new AuthService();

export default authService;