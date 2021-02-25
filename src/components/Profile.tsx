import { useContext } from 'react'

import { ChallengesContext } from '../hooks/ChallengesContext'

import styles from '../styles/components/Profile.module.css'


export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/thiagofalmeida.png" alt="Thiago"/>

      <div>
        <strong>Thiago Almeida</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}