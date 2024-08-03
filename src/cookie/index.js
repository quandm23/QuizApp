export const setCookie = (c_name, c_value, exdays) => {
    var a = new Date();
    a = new Date(a.getTime() + 1000 * 60 * 60 * 24 * exdays);  // Sử dụng exdays để tính ngày hết hạn
    var expires = "expires=" + a.toUTCString();  // Dùng toUTCString() thay vì toGMTString()
    document.cookie = encodeURIComponent(c_name) + "=" + encodeURIComponent(c_value) + ";" + expires + ";path=/";
}

export const getCookie = (name) =>{
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  export const deleteAllCookies= () =>{
    document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    });
}