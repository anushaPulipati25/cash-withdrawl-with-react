import './index.css'

const DenominationItem = props => {
  const {itemDetails, uniqueId, onClickIncrement} = props
  const {value} = itemDetails

  const onClickDeduct = () => {
    onClickIncrement(value)
  }

  const itemEle = (
    <li className="listItem">
      <button type="button" className="numberBtn" onClick={onClickDeduct}>
        {value}
      </button>
    </li>
  )
  return itemEle
}

export default DenominationItem
