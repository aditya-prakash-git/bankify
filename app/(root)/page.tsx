import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

    const loggedIn = {firstName : 'Aditya'};
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

        </div>
    
    
    </section>
  )
}

export default Home