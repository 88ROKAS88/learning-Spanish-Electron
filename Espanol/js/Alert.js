class Alert {
  constructor(text, type) {
    const alert = CreateElement.alert(text, type);
    Espanol.app.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 2000);
  }
}
