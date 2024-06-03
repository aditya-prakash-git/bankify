import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'


const Home = () => {

    const loggedIn = {firstName : 'Aditya', lastName: 'Prakash', email: 'aditya12prakash@gmail.com'};
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || 'Guest'}
                subtext = "Manage your account efficiently and quickly, now with Bankify."
                />
                <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={90990.23}
                
                />

            </header>
            RECENT TRANSACTIONS
            

        </div>

        
       
        <RightSidebar user={loggedIn}
          transactions={[]}
          banks={[{currentBalance: 50200}, {currentBalance: 50200}]}
        />
      
    
      
    </section>
  )
}

export default Home