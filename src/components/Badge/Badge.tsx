type Props = {
    label: string;
}

const Badge = ({label}: Props) => (
    <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300">{label}</span>
);

export default Badge;