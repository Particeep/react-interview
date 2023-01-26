const RatioBar = ({ value }: { value: number | string }) => (
	<div className=" inline-block w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-400">
		<div
			className="bg-red-600 h-1.5 rounded-full transition-all duration-500 ease-in-out"
			style={{ width: value + '%' }}
		></div>
	</div>
)

export default RatioBar
