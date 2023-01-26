import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, selectCategories } from '@/slices/movieSlice'
import Select from 'react-select'

const Navbar = () => {
	const options = useSelector(selectCategories).map(category => ({
		value: category,
		label: category,
	}))

	const dispatch = useDispatch()

	return (
		<nav className="min-h-min px-12 md:px-24 fixed w-full z-10">
			<section className="bg-orange-500 w-full h-full px-12 py-6 flex justify-between items-center rounded-b-lg max-sm:flex-wrap max-sm:justify-center max-sm:gap-y-5">
				<Image
					src="/partikeep.svg"
					alt="logo"
					className="hidden md:block mr-4"
					width={180}
					height={200}
				/>
				<Image
					src="/mini_partikeep.svg"
					alt="logo"
					className="block md:hidden mr-4"
					width={40}
					height={40}
				/>

				<Select
					options={options}
					isMulti
					onChange={options => {
						const categories = options.map(option => option.value)
						dispatch(setFilter(categories))
					}}
					placeholder="Genres..."
				/>
			</section>
		</nav>
	)
}

export default Navbar
