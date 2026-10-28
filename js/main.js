const BOOK_FILES = [
  "Addison.Wesley.PostgreSQL.Introduction.And.Concepts.Dec.2000.ISBN.0201703319.pdf",
  "Addison.Wesley.Python.Mar.2015.ISBN.0134034287.pdf",
  "Adnan Aziz, Tsung-Hsien Lee, Amit Prakash-Elements of Programming Interviews_ The Insiders’ Guide (2015).pdf",
  "advanced-linux-programming.pdf",
  "Advanced.Programming.in.the.UNIX.Environment.3rd.Edition.0321637739.pdf",
  "Advanced_Operating_Systems.pdf",
  "An Introduction to Parallel Programming.pdf",
  "Beginning_Linux_Programming_4e.pdf",
  "clean-architectures-in-python.pdf",
  "Computer_Systems-A_Programmers_Perspective-2e.pdf",
  "Cra.Th.C.C++ An.Ja.Int.pdf",
  "Design Patterns, Elements of Reusable Object-Oriented Software.pdf",
  "Designing Data Intensive Applications.pdf",
  "Distributed Systems Principles and Paradigms.pdf",
  "Expert C Programming - Deep C Secrets.pdf",
  "How.Linux.Works.What.Every.Superuser.Should.Know.2nd.Edition.PDF.pdf",
  "Linux Kernel Development - 3rd Edition.pdf",
  "Linux System Programming - Robert Love.pdf",
  "linux system programming talking directly to the kernel and c library.pdf",
  "Michal Jaworski, Tarek Ziade - Expert Python Programming, Second Edition - 2016.pdf",
  "Modern Operating Systems - 4th Edition.pdf",
  "Operating System Concepts - 9th Edition.pdf",
  "Parallel Programming with Python [Palach 2014-07-14].pdf",
  "pointers-on-c-kenneth-reek-pdf-free.pdf",
  "Practical File System Design - The Be Filesystem.pdf",
  "ptyhon-network-engginering-english-version.pdf",
  "Python Essential Reference, Fourth Edition (2009).pdf",
  "python parallel programming.pdf",
  "tanenbaum_woodhull_operating-systems-design-implementation-3rd-edition.pdf",
  "The Docker Book - James Turnbull.pdf",
  "The Hacker's Guide to Python - Julien Danjou.pdf",
  "The Linux Programming Interface-Michael Kerrisk.pdf",
  "the-protocols-tcp-ip-illustrated-volume-1.9780201633467.24290.pdf",
  "The_Art_of_Multiprocessor_Programming.pdf",
  "the_c_programming_language_2.pdf",
  "Theartofmulticore.pdf",
  "UnderstandingTheLinuxKernel3rdEdition.pdf",
  "UNIX Network Programming, Volume 1, Third Edition, The Sockets Networking API.pdf",
  "unix-linux-system-administration-handbook-5th.pdf",
  "VMware_paravirtualization.pdf",
  "W. Richard Stevens - Unix Network Programming Vol2.pdf"
];

const DESCRIPTION_PLACEHOLDER = "Livro técnico em PDF para consulta e aprendizagem.";

const ICONS = {
  python: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2c-3.6 0-3.4 1.6-3.4 1.6v1.7h3.6v.5H7.2S4 5.4 4 10.5c0 5 2.8 4.8 2.8 4.8h1.7v-2.4s-.1-2.8 2.8-2.8h4.6s2.6 0 2.6-2.5V3.9S19 2 15.4 2H12Zm-2 2a1.1 1.1 0 1 1 0 2.1 1.1 1.1 0 0 1 0-2.1Zm2 18c3.6 0 3.4-1.6 3.4-1.6v-1.7h-3.6v-.5h5s3.2.4 3.2-4.7c0-5-2.8-4.8-2.8-4.8h-1.7v2.4s.1 2.8-2.8 2.8h-4.6S6 14 6 16.5v3.7S5 22 8.6 22H12Zm2-2a1.1 1.1 0 1 1 0-2.1 1.1 1.1 0 0 1 0 2.1Z"/></svg>`,
  network: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 3h6v4h5v6h-4v5h-8v-5H4V7h5V3Zm1 2v2h4V5h-4Zm-4 4v2h12V9H6Zm4 4v3h4v-3h-4Z"/></svg>`,
  system: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 4h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6v2h2v2H7v-2h2v-2H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm1 2v9h16V6H4Zm2 1h5v2H6V7Zm0 3h8v2H6v-2Z"/></svg>`,
  data: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3c-4.4 0-8 1.3-8 3v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6c0-1.7-3.6-3-8-3Zm0 2c3.8 0 6 .9 6 1s-2.2 1-6 1-6-.9-6-1 2.2-1 6-1Zm0 5c2.3 0 4.5-.3 6-1v2c0 .1-2.2 1-6 1s-6-.9-6-1V9c1.5.7 3.7 1 6 1Zm0 4c2.3 0 4.5-.3 6-1v2c0 .1-2.2 1-6 1s-6-.9-6-1v-2c1.5.7 3.7 1 6 1Zm0 4c2.3 0 4.5-.3 6-1v1c0 .1-2.2 1-6 1s-6-.9-6-1v-1c1.5.7 3.7 1 6 1Z"/></svg>`,
  c: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2 4 6v12l8 4 8-4V6l-8-4Zm0 2.2 5.8 2.9v9.8L12 19.8l-5.8-2.9V7.1L12 4.2ZM10.3 8.6c-2.2 0-4 1.4-4 3.4s1.8 3.4 4 3.4c1.4 0 2.6-.6 3.3-1.6l-1.6-.8c-.3.4-.9.7-1.6.7-1.2 0-2-.7-2-1.7s.8-1.7 2-1.7c.7 0 1.2.3 1.6.7l1.6-.8c-.7-1-1.9-1.6-3.3-1.6Z"/></svg>`,
  generic: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h8l5 5v14a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v14c0 .6.4 1 1 1h11V8h-4a2 2 0 0 1-2-2V4H7Zm7 0v2h2l-2-2Z"/></svg>`
};

const normalize = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9+\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const prettifyTitle = (file) =>
  file
    .replace(/\.pdf$/i, "")
    .replace(/[_.-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const inferTags = (file) => {
  const n = normalize(file);
  const tags = [];

  if (n.includes("python") || n.includes("ptyhon")) tags.push("python");
  if (n.includes("network") || n.includes("tcp") || n.includes("protocol") || n.includes("socket")) tags.push("network");
  if (n.includes("linux") || n.includes("unix") || n.includes("kernel") || n.includes("operating")) tags.push("system");
  if (n.includes("parallel") || n.includes("multiprocessor") || n.includes("multicore") || n.includes("distributed") || n.includes("virtualization")) tags.push("parallel", "distributed");
  if (n.includes("postgres") || n.includes("data")) tags.push("database", "data");
  if (n.includes(" c ") || n.includes("c++") || n.includes("programming language") || n.includes("pointers")) tags.push("c", "linguagem");
  if (tags.length === 0) tags.push("engenharia", "software");

  return [...new Set(tags)];
};

const iconForTags = (tags) => {
  if (tags.includes("python")) return ICONS.python;
  if (tags.includes("network")) return ICONS.network;
  if (tags.includes("system")) return ICONS.system;
  if (tags.includes("database")) return ICONS.data;
  if (tags.includes("c")) return ICONS.c;
  return ICONS.generic;
};

const buildBooks = (bookFiles) => bookFiles.map((file) => {
  const tags = inferTags(file);
  const title = prettifyTitle(file);
  return {
    title,
    description: DESCRIPTION_PLACEHOLDER,
    file,
    tags,
    icon: iconForTags(tags),
    searchableText: normalize([title, DESCRIPTION_PLACEHOLDER, tags.join(" "), file].join(" "))
  };
});

const books = buildBooks(BOOK_FILES);

const listElement = document.getElementById("book-list");
const searchElement = document.getElementById("book-search");
const statusElement = document.getElementById("search-status");
const noResultsElement = document.getElementById("no-results");

const levenshteinDistance = (a, b) => {
  const source = normalize(a);
  const target = normalize(b);

  if (source === target) return 0;
  if (!source.length) return target.length;
  if (!target.length) return source.length;

  const matrix = Array.from({ length: source.length + 1 }, () => Array(target.length + 1).fill(0));

  for (let i = 0; i <= source.length; i += 1) matrix[i][0] = i;
  for (let j = 0; j <= target.length; j += 1) matrix[0][j] = j;

  for (let i = 1; i <= source.length; i += 1) {
    for (let j = 1; j <= target.length; j += 1) {
      const cost = source[i - 1] === target[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[source.length][target.length];
};

const renderBooks = (items) => {
  listElement.innerHTML = "";
  const fragment = document.createDocumentFragment();

  items.forEach((book) => {
    const card = document.createElement("li");
    card.className = "book-card";
    card.dataset.tags = book.tags.join(" ");

    const icon = document.createElement("div");
    icon.className = "book-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = book.icon;

    const title = document.createElement("h3");
    title.className = "book-title";
    title.textContent = book.title;

    const description = document.createElement("p");
    description.className = "book-description";
    description.textContent = book.description;

    const link = document.createElement("a");
    link.className = "book-link";
    link.href = `./_uploads/${encodeURI(book.file)}`;
    link.target = "_blank";
    link.rel = "noreferrer noopener";
    link.textContent = "Abrir/baixar livro (PDF)";

    card.append(icon, title, description, link);
    fragment.append(card);
  });

  listElement.append(fragment);
};

const matchesBook = (book, query) => {
  if (!query) return true;

  const terms = normalize(query).split(" ").filter(Boolean);
  const bookTokens = book.searchableText.split(" ").filter((token) => token.length > 1);

  return terms.every((term) => {
    if (book.searchableText.includes(term)) return true;

    let minDistance = Number.POSITIVE_INFINITY;
    for (const token of bookTokens) {
      const distance = levenshteinDistance(term, token);
      if (distance < minDistance) minDistance = distance;
      if (distance === 0) break;
    }

    const maxDistance = Math.max(1, Math.floor(term.length * 0.35));
    return minDistance <= maxDistance;
  });
};

const updateStatus = (itemsCount, query) => {
  if (!query.trim()) {
    statusElement.textContent = `${itemsCount} livros disponíveis no catálogo.`;
    return;
  }
  statusElement.textContent = `${itemsCount} resultado(s) para “${query.trim()}”.`;
};

const filterBooks = () => {
  const query = searchElement.value;
  const filtered = books.filter((book) => matchesBook(book, query));

  renderBooks(filtered);
  noResultsElement.hidden = filtered.length !== 0;
  updateStatus(filtered.length, query);
  document.dispatchEvent(new CustomEvent("catalog:updated"));
};

searchElement.addEventListener("input", filterBooks);
filterBooks();
