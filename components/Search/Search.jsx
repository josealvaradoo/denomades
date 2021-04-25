import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Search as SearchIcon } from 'react-feather'
import { selector as ActivitySelector } from '@ducks/activities'
import Card from '@components/Card'

const Search = () => {
  const [keyword, setKeyword] = useState('')
  const [result, setResult] = useState([])
  const { activities } = useSelector(ActivitySelector)

  const handleChange = (e) => {
    setKeyword(e?.target?.value)
  }

  useEffect(() => {
    if (keyword.length === 0) {
      setResult([])
      return
    }

    setResult(
      activities?.reduce((rows, activity) => {
        if (
          activity?.name?.toLowerCase().search(keyword?.toLowerCase()) !== -1
					|| activity?.description?.toLowerCase().search(keyword?.toLowerCase()) !== -1) {
          return rows.concat(activity)
        }

        return rows
      }, []),
    )
  }, [keyword])

  return (
	<div className="search">
		<div className="search-input">
			<input onChange={handleChange} />
			<SearchIcon className="icon" />
		</div>
		{
			result?.length > 0 && (
				<div className="search-result">
					<ul>
						{
							result?.map((item) => (
								<li key={item?.id}>
									<Card type="search" activity={item} className="search-card" />
								</li>
							))
						}
					</ul>
				</div>
			)
		}
	</div>
  )
}

export default Search
