console.log("Hello World");

window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    let cardAttachments = opts.attachments; // Trello passes you the attachments on the card
    return t.card("all").then(function (card) {
      if (card.coordinates) {
        return [
          {
            text: "83 F",
          },
        ];
      }
    });
  },
});
