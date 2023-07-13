console.log("Hello World");

window.TrelloPowerUp.initialize({
  "card-buttons": function (t, options) {
    return [
      {
        text: "Open PR",
        callback: function (t) {
          return t.popup({
            title: "PR",
            url: "pr.html",
          });
        },
      },
    ];
  },
});
