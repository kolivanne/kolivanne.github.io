const githubCache = new Map();

async function fetchLastCommit(repo) {
  if (githubCache.has(repo)) {
    return githubCache.get(repo);
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`, {
      headers: { "Accept": "application/vnd.github+json" }
    });

    if (!res.ok) throw new Error("GitHub API error");

    const data = await res.json();
    const date = data[0]?.commit?.committer?.date;

    const formatted = formatDate(date);
    githubCache.set(repo, formatted);

    return formatted;
  } catch (err) {
    console.warn("GitHub fetch failed for", repo, err);
    return null;
  }
}

function formatDate(dateString) {
  if (!dateString) return null;

  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short"
  });
}