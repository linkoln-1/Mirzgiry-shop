// import library
import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useAppSelector } from '../../hooks/hook'

interface IGroupSelect {
  onClickSize: (_id: string) => void
  onClickColor: (_id: string) => void
  onClickPrice: (_id: string) => void
}

export const GroupedSelect: React.FC<IGroupSelect> = ({
  onClickSize,
  onClickColor,
  onClickPrice,
}) => {
  const prices = useAppSelector(state => state.categoriesPriceSlice.categoriesPrice)
  const colors = useAppSelector(state => state.categoriesColorSlice.categoriesColor)
  const dimensions = useAppSelector(state => state.categoriesSizeSlice.categoriesSize)

  return (
    <div className='GroupedSelect'>
      <FormControl variant='standard' sx={{ m: 1, minWidth: 100 }}>
        <InputLabel htmlFor='grouped-select'>Размер</InputLabel>
        <Select defaultValue='' id='grouped-select' label='Размер'>
           {dimensions.map(item => {
             return (
              <MenuItem
                key={item._id}
                onClick={() => onClickSize(item.name)}
                value={item._id}
              >
                {item.name}
              </MenuItem>
             )
           })}
        </Select>
      </FormControl>
      <FormControl variant='standard' sx={{ m: 1, minWidth: 111 }}>
        <InputLabel htmlFor='grouped-select'>Цвет</InputLabel>
        <Select defaultValue='' id='grouped-select' label='Цвет'>
         {colors.map(item => {
           return (
           <MenuItem
          key={item._id}
          onClick={() => onClickColor(item._id)}
           value={item._id}
           >
           {item.name}
           </MenuItem>
           )
         })}
        </Select>
      </FormControl>

      <FormControl variant='standard' sx={{ m: 1, minWidth: 160 }}>
        <InputLabel htmlFor='grouped-select'>Цена</InputLabel>
        <Select defaultValue='' id='grouped-select' label='Цена'>
          {prices.map(item => {
            return (
             <MenuItem
               key={item._id}
               onClick={() => onClickPrice(item._id)}
               value={item._id}
             >
               {item.name}
             </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}
