const links = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

const SocialLinks = () => {
  return (
    <div className="w-48 space-y-4">
      <h3 className="font-black uppercase">Social</h3>

      <ul className="font-medium text-dark-light space-y-2">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
