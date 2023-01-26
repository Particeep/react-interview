import { Movie } from '@/movies'
import { useState } from 'react'
import RatioBar from './RatioBar'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import {
	deleteMovie,
	like,
	dislike,
	unlike,
	undislike,
} from '@/slices/movieSlice'
import {
	TrashIcon,
	HandThumbUpIcon,
	HandThumbDownIcon,
} from '@heroicons/react/24/outline'

interface Props {
	data: Movie
}

const LIKE = 'like'
const DISLIKE = 'dislike'
const NEUTRAL = 'neutral'

const Card = ({ data }: Props) => {
	const [reaction, setReaction] = useState('neutral')
	const dispatch = useDispatch()

	const handleReaction = (input: string) => {
		if (reaction === NEUTRAL) {
			setReaction(input)
			if (input === LIKE) dispatch(like(data.id))
			else dispatch(dislike(data.id))
		} else if (reaction === LIKE) {
			if (input === DISLIKE) {
				dispatch(unlike(data.id))
				dispatch(dislike(data.id))
				setReaction(DISLIKE)
			} else {
				dispatch(unlike(data.id))
				setReaction(NEUTRAL)
			}
		} else if (reaction === DISLIKE) {
			if (input === LIKE) {
				dispatch(undislike(data.id))
				dispatch(like(data.id))
				setReaction(LIKE)
			} else {
				dispatch(undislike(data.id))
				setReaction(NEUTRAL)
			}
		}
	}

	return (
		<div className="flex justify-center w-full md:w-1/2 lg:w-1/4 xl:w-1/5">
			<div className="rounded-lg shadow-lg bg-white w-full">
				<div
					className="rounded-t-lg h-80 w-full bg-center bg-cover bg-no-repeat"
					style={{
						backgroundImage: `url(${
							data?.image || 'https://picsum.photos/1382/2048'
						})`,
					}}
				></div>
				<div className="p-6">
					<div className="flex justify-between items-center">
						<h5 className="inline-block text-gray-900 text-xl font-bold mb-2 w-3/6 truncate">
							{data?.title}
						</h5>
						<span
							className={classNames(
								'text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full',
								{
									'bg-yellow-100  text-yellow-800  dark:bg-yellow-900 dark:text-yellow-300':
										data?.category === 'Comedy',
								},
								{
									'bg-orange-100  text-orange-800  dark:bg-orange-900 dark:text-orange-300':
										data?.category === 'Drame',
								},
								{
									'bg-indigo-100  text-indigo-800  dark:bg-indigo-900 dark:text-indigo-300':
										data?.category === 'Animation',
								},
								{
									'bg-red-100  text-red-800  dark:bg-red-900 dark:text-red-300':
										data?.category === 'Thriller',
								},
								{
									'bg-gray-100  text-gray-800  dark:bg-gray-900 dark:text-gray-300':
										![
											'Drame',
											'Comedy',
											'Thriller',
											'Animation',
										].includes(data?.category),
								}
							)}
						>
							{data.category}
						</span>
					</div>
					<p className="text-gray-700 text-base mb-4">
						{data?.description ||
							"Some quick example text to build on the card title and make up the bulk of the card's content."}
					</p>
					<div>
						<div className="flex justify-between">
							<div className="flex">
								<button
									type="button"
									className={`inline-block max-sm:px-6 px-4 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out rounded-full rounded-r-none ${
										reaction === LIKE &&
										'bg-gray-600 hover:bg-gray-700 focus:bg-gray-700'
									}`}
									onClick={() => handleReaction(LIKE)}
								>
									<HandThumbUpIcon className="h-6" />
								</button>
								<button
									type="button"
									className={`inline-block max-sm:px-6 px-4 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out rounded-full rounded-l-none ${
										reaction === DISLIKE &&
										'bg-gray-600 hover:bg-gray-700 focus:bg-gray-700'
									}`}
									onClick={() => handleReaction(DISLIKE)}
								>
									<HandThumbDownIcon className="h-6" />
								</button>
							</div>
							<button
								type="button"
								className={`inline-block p-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out rounded-full`}
								onClick={() => dispatch(deleteMovie(data.id))}
							>
								<TrashIcon className="h-6" />
							</button>
						</div>
						<RatioBar
							value={
								(data?.likes / (data?.dislikes + data?.likes)) *
								100
							}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
