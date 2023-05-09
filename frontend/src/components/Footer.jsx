import React from 'react'
import { Container, Logo, PartnersContainer, Partners, Contact} from './styles/Footer.styled'

const Footer = () => {
  return (
    <Container>
        <Logo>
            <h2>Salony</h2>
        </Logo>
        <PartnersContainer>
            <h3>Partnerzy</h3>
            <Partners>
                    <div>
                        <img src='https://static.vecteezy.com/system/resources/previews/009/127/275/original/gbs-logo-gbs-letter-gbs-letter-logo-design-initials-gbs-logo-linked-with-circle-and-uppercase-monogram-logo-gbs-typography-for-technology-business-and-real-estate-brand-vector.jpg' />
                    </div>
                    <div>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYwput_Zdn13Q5q5G_PfO38xM9Wagg75qc-oJ4Exzd5hrLWBNI3NOjh5SYjPqvnHZsiU&usqp=CAU' />
                    </div>
                    <div>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEUAAAD////8/PwEBAT5+fn29vbJycnz8/OPj4/BwcHj4+PY2Njg4OA5OTmwsLDh4eF+fn64uLjs7Ox2dnaqqqqGhoZSUlIrKyugoKBFRUWZmZliYmJsbGzS0tK2trYcHBw7OzsREREpKSlNTU0yMjJmZmacnJyLi4shISFaWloXFxd5eXlPT09HR0coS31vAAAK70lEQVR4nO2ci3qiOhCASYIi6lq1aNVaq629bXve//VOZibIPYBbie03/3dO1wvCDEnmlgTPYxiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGaYgy//9elPfuWoQLo7zxfOpaiMuyF0L0XQtxUVZCSjG/cy3GBRkKQP5Jf6Z+k/H5I6TWz8+p+JtYaA2lRvTu4oZ7366iSfR6/yscifJmQvioo5iTPtORMMj+9heo6N1oTeQn6ChG+u0iANX0G/hHiPmta/n+mQOMQvG+RhXDx7HIM3764c14RDX23vscLQ41Xgr9/ofHA0vUY63H24MoqGeYwIH5hvwxDXuLOnzAy1WVhhDyVCt07aoOsCcuQNCVqNBQiofC76b9ea83H83elg6EbsXrqR9uKxoQSauolLcMkq+CN/3JFTfkJu6G3tymoQjTP5q26MRuUIlIA5RxXtOEmo35icLfZPvzFaYmT8tYxU+S8cnr12goXugHSivo578buFOlgnexMq/IW4ilV2VmTvgH+sUbxOlZpHh2pkoVYzHz0DzcmT74UdeEQgd1YFG2wkR0w8Hn24MwTtT/61qjLBhvm1bsofThoFZBKbTR1G1uvCZZ12Mc5g0dqlPKrRb4Hs3GCNtkGNZrKMWdd+fHTXhvzjRCsyOvzto8aaECfBWhyJXhTIa+KQgIykMQNQbDo38/uzKXAU03AZnuyyPu8mZ8MPZIimPiPMamhSeOVcqBnn4Nr3pNdMvoqTPmbfpcY+wC16YiZk1oLWZtNcQ4NumR+tUDfOr72cDHASr1F6WSOqdQ3ktb9aSI0kMOnE4f+zmOTqdluk0wIIGAKXQtNICFCKVOxV3x1KEZoMHScxmF9wTd5PidVlGRb/xHBfUpd/SdEJ/d6pThEYQYn95G8Halpfto6CsE2dxZ+dlf47MsOlKnBNQwcWR/4V0PXjXVT1gMJgTk5jzb8iM64EACnAzeDgT+1LLVxzOJglFFLqhH3yI+6tCdTlkejQBxWvEEnQ7iybrUMMW4+vQKQ8HMPeyaYyzmwkgUQaNAn2reTUfVp4fihjmRq4mspPYQG4OepKSgNvs9YY2vlbemo1zZ09RwMzk5jpypl4ygWiLrFRRFN1Xm9uKQjGTTN/TRUL8NTmlwA+zlCmUKW8XiYycM0hqaxjjC2wjqbA2H4kfNRe7xEsHltSmDdBjEc2c7tA0Yu+29ScMmlHURGdlr2f3yDq1LP767oSmVhejZ4OPA1PZr9YNSTc2V6NzHTrTKsqFaw5cHSxMILOSiCwmPjXqpjIevBarbrC+vUJ4FCmjcxNbIiwYBI5tJo/xCNmibvgsNlYkZfYyzoeGee2RwwH+vY+kbaGjx9zE7N204I4V2lLvpPweqraC7nzevRDWY8qYh8N+lNUqDBUNUJ+OHjdLBk3HSTZg3uNy0+zZUuJ6EWjArCn4aPNnnnNI0me6mWYL9RVSphGqcuSkwHUOSag0LiXAzmlyMwvtuvYVJKUouOitOItm4L56hCLp8+fjdSlgh3/BQ5qujNgo2K9srKL/2vlmFGigefY0loH/eP1cju0JZJMWay81LXS0N+n4Tk/SNQLgv0/Wh9SYM6jQqaChubyc38GpgDdwUBjUdz9LcooBTEuy46Acnoc1/zdownrCwJ/BU9Om4jLFGwSCxO77eVEnegprABoKalf2QbwcbLfK2o6xG81E4CYPWCsqaaiEkYt3WE5W+JiwyvEk32nx2SwZ9adNFylw0R73aPt0Lw77rWf07n+SN5Rxv9smXFosqi/NudI4X29VgcceFFcqhw2yzkhvFu3k90qfm76wgf/Lv5Pl5O4gmk90s1Owmi+MLfmcpmmIdo+s5/a1/EtnfZYJ+BUtHEvXmJsQxFlbfEb8/zWUJVK+zVWueO3cWm5N1GWMZM+PN3mEFdKzh62c8/tKNLoJRP4y2xtH/lZlJ/BL2okEl4DvZnSyGX/Ithm2+WV0ReWvT3BNvu8qtFqbUK14Qtax2+0eB866dEZHwuKSkkL9iADJ7jZXQt/5Iq7wxTzp89hNDKk+OHjMSSyPqVr6MKmXEBVrdJqBiSbQ4hBu+noSYD4MXO/awT8eHviXJY7wdg6ZfLCPR79LQvJx62DEXmxpmxnd9iXjh1gf109P2koXpuEkfx0FqqWr3OozZFI2wuRk/0s8ND+X9Z1rjyyxqUsoUh83NAPNCZidpmK2wL9XrdTUvo8zMp2+KJlCO6RdMQEQhOazbMynyI96V1PzEATU8eQBF68RK800k6G5ubUl+zUwXYWpaLJaFuFjrNpUVoVN8Sx2SsqVwHt334ZDKclqH3nCM3elUXYF28h8Lt34Brb2jFWDAMt1LEQzeTtNqCrfZWDKk7lZGLcnKx7IqLOw/lE7DK5k46UXGcgJ+rtuaWY6qWkx3tVKqr8d2X2EMKktSdP1NektBmLWcnumlmf4dGPdZRlfr9nW8TUFXRrKRHkF1+yPmWcupT5V3gGaSIHC6+smLPXPay5Plr6kSPcmMXfEgdgVSVWx9HowE62ZLLw2lRWmbaFS02zpcbprpgc94oqwLwKTa7ZJZBboUom1a7mqdi18VgjIyPdmj/hQGa/ccJNn47G2mlNc2FHEVsEyvvI9KNKTpHGuuf3E+MglBmk8I/iv7VyByo5eUyY/eaX60ds9rRXysVfu7qy5D7E0Ak7oDsjRd6pWo3S1YYSqJgVH0u8qd6VQ+HqQOv8OBmTNPGKD7LqbrE/ySwdMAssDpgUrTHoUY7RmC04VDa/pV2rXqGReMZL8QpxLDfG/uGDT67XeUKVQnM0wpun0quYLbrUA4DNvvM/9I51vINBPdpjjaou8OgMufsbrsNRtlx1spSpckjm1J4sXBBXQlmwbq6GfzIm1Jqdy2Lzl2U26sOyKq8BV1+Pkuuaoq4yuMyLueRktAk9h+0+Ox4O+pzl++zGToMKpRFdah5lcmyE61PTnDigG9crjF+b7USdcRb0tI3mOUKqu8zv4sj/s9rCxVBhuQ38tU3WNT5Sriw63zbJckzIdezaAFvrtTdeJA00+Vc9ahOw2H5O/bQmuLkqwvxAdIVY+1rbg5S7xvoHeev59kc11ale5XJ5OPztoQ1zSfcfFRKqcEM4Pe/t4S+t24sjT7s0ypp/yUgVK4AlXafXrkaGMFabhrHXZ/YfyyN++mZrOh7dE7W1d7uLCXtp0+UBB207poMKZr4cvaxwgcXT3x45BPgZqAOzKSTcw4F1wbsjh7MOhQFAuJ9QSCiv5KmS32bmtpVmD13KSthvs4fjG7zzteNNKOj2J1rB6Msmn0wt5z3+Ym3DM8YyUyhnq4FCY85wZ1zK2o30iXJ4gDIW1x5lf+SEiF8zItfdWd2YqoI5veNY/AGCiatds0vgAN/3jHwP8J+nk4ltoVUcC6jL3bPhTarrmDnjj4wjbFlEfhvu6F93MemIw1F/vGgezhd5Qo/SBg43ibFHGBDy35Wc+AfqwsIZUROq1gn8m2jdfvOSycnU9otsU24L/afRTXSSCb+sTBFT41rwlfjbPE/s98IDIsz2q4m7PneNnBmej49KFZjnDv9glW/4Rs5AKinzkKkfW4iTmdN9vke43o6G1av0pyf/UJr5VV/UzpwNmTnb4Ddaj35MPmMfp1Uif9H2eTZN9GjYqRiwfmdMnBshPtd/CzksL2mCfWMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDfB//A2kgYP5NgeB1AAAAAElFTkSuQmCC' />
                    </div>
            </Partners>
        </PartnersContainer>
        <Contact>
            <p><strong>Email:</strong> salony@info.pl</p>
            <p><strong>Tel:</strong> (+48) 777 222 121</p>
        </Contact>
    </Container>
  )
}



export default Footer