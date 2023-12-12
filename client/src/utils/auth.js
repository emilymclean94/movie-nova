import decode from "jwt-decode";

class AuthService {
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp * 1000 < Date.now();
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem("token");
  }

  getProfile() {
    return decode(this.getToken());
  }

  login(idToken) {
    localStorage.setItem("token", idToken);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("token");
    window.location.assign("/");
  }
}

const authService = new AuthService();

export default authService;
