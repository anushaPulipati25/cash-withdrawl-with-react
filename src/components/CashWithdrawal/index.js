import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  onClickIncrement = deductAmount => {
    const {balance} = this.state

    if (balance >= deductAmount) {
      const totalBalance = balance - deductAmount
      this.setState({balance: totalBalance})
    } else {
      console.log('Insufficient Fund')
    }
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const mainEle = (
      <div className="mainBgContainer">
        <div className="bgContainer">
          <div className="nameContainer">
            <h1 className="userIcon">S</h1>
            <h1 className="username">Sarah Williams</h1>
          </div>
          <div className="balanceContainer">
            <p className="balanceText">Your Balance</p>
            <div className="rupeeContainer">
              <p className="moneyText">{balance}</p>
              <p className="rupeeText">In Rupees</p>
            </div>
          </div>
          <div className="withdrawContainer">
            <p className="withdrawText">Withdraw</p>
            <p className="chooseText">CHOOSE SUM (IN RUPEES)</p>
            <ul className="btnContainer">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  uniqueId={eachItem.id}
                  itemDetails={eachItem}
                  onClickIncrement={this.onClickIncrement}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
    return mainEle
  }
}

export default CashWithdrawal
