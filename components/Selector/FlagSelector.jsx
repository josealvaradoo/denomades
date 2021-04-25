import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ChileFlag from '@images/flags/chile.svg'
import EEUUFlag from '@images/flags/united-states.svg'
import BrazilFlag from '@images/flags/brazil.svg'
import PeruFlag from '@images/flags/peru.svg'
import ColombiaFlag from '@images/flags/colombia.svg'
import ArgentinaFlag from '@images/flags/argentina.svg'
import SpainFlag from '@images/flags/spain.svg'
import { actions as CurrencyActions, selector as CurrencySelector } from '@ducks/currencies'

const options = [
  {
    name: 'CLP',
    image: ChileFlag,
  },
  {
    name: 'USD',
    image: EEUUFlag,
  },
  {
    name: 'BRL',
    image: BrazilFlag,
  },
  {
    name: 'PEN',
    image: PeruFlag,
  },
  {
    name: 'COP',
    image: ColombiaFlag,
  },
  {
    name: 'ARS',
    image: ArgentinaFlag,
  },
  {
    name: 'EUR',
    image: SpainFlag,
  },
]

const FlagSelector = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [current, setCurrent] = useState(options[0])
  const { currencies } = useSelector(CurrencySelector)

  const selectFlag = (flag) => {
    dispatch(CurrencyActions.active(flag?.name))
    setIsOpen(false)
  }

  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    setCurrent(options?.find((option) => option?.name === currencies?.active))
  }, [currencies])

  return (
	<div className="flag-selector">
		<div className="current">
			<a role="button" onClick={toggle}>
				<img src={current?.image} alt={current?.name} className="flag" />
			</a>
		</div>
		<div className={`options ${isOpen ? '' : 'hide'}`}>
			<ul>
				{options?.filter((option) => option?.name !== current?.name).map((option) => (
					<li key={option?.name}>
						<a role="button" onClick={() => selectFlag(option)}>
							<img
								src={option?.image}
								alt={option?.name}
								className="flag"
							/>
						</a>
					</li>
				))}
			</ul>
		</div>
	</div>
  )
}

export default FlagSelector
