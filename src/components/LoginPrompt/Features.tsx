const FeatureList = [
  {
    icon: "🔒",
    title: "Secure & Safe",
    description: "Your funds are always under your control",
  },
  {
    icon: "⚡",
    title: "Instant Payouts",
    description: "Win and withdraw immediately",
  },
  {
    icon: "🎮",
    title: "Provably Fair",
    description: "All games are verifiably fair",
  },
];

const FeaturesSection = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="feature">
      <span className="feature-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
        
export const Features = () => {
  return (
    <div className="login-features">
      {FeatureList.map((feature, index) => (
        <FeaturesSection key={index} {...feature} />
      ))}
    </div>
  );
};