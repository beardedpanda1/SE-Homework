import receipts from '../data'
import Receipt from './Receipt'

function Layout(){
    return(
        <div className = "layout">
            {receipts.map((receipt) => {return <Receipt receipt = {receipt} />})}
        </div>
    )
}

export default Layout;


