const linkRegex = /^https:\/\/github\.com\/[^\/]+\/([^\/]+)\/pull\/(\d+)$/;
function parseGitHubURL(url) {
  const match = url.match(linkRegex);
  if (match) {
    const repository = match[1];
    const pullRequestNumber = match[2];
    console.log({ repository, pullRequestNumber });
    return {
      repository,
      pullRequestNumber,
      details: `[pr ${pullRequestNumber}](${url})`,
    };
  }
  return undefined;
}

let trello = TrelloPowerUp.iframe();

window.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(trello.getContext());
  const { repository, pullRequestNumber, details } = parseGitHubURL(
    document.getElementById("github-link").value
  );
});
