console.log("Hello World");

window.TrelloPowerUp.initialize({
  "card-buttons": function (t, options) {
    return [
      {
        text: "Open PR",
        callback: function (t) {
          return t.popupt({
            title: "PR",
            url: "pr.html",
          });
        },
      },
    ];
  },
});
