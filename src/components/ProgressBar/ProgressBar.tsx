type Props = {
    dislikesPercentage: number;
    likesPercentage: number;
}

const ProgressBar = ({dislikesPercentage, likesPercentage}: Props) => (
    <div className="h-2 mb-6 relative">
        <div className="bg-blue-600 h-2 absolute left-0" style={{width: likesPercentage + "%"}}></div>
        <div className="bg-red-600 h-2 absolute right-0" style={{width: dislikesPercentage + "%"}}></div>
    </div>
);

export default ProgressBar;