console.log("Hello World");

window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    let cardAttachments = opts.attachments; // Trello passes you the attachments on the card
    return t.card("all").then(function (card) {
      console.log(JSON.stringify(card, null, 2));
      return [{ text: "Dave Broke it" }];
    });
  },
});
