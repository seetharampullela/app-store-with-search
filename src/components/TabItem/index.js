// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, updateActiveId, isActive} = props
  const {tabId, displayText} = tabItem
  const onclickUpdateId = () => {
    updateActiveId(tabId)
  }
  const classTab = isActive ? 'active-tab' : ''

  return (
    <li className="tab-list-item" key={tabId}>
      <button
        onClick={onclickUpdateId}
        type="button"
        className={`button-item ${classTab}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
