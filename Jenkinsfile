pipeline {
  agent any

  tools {
    nodejs 'Node18'
  }

  stages {
    stage('Clone repo') {
      steps {
        git url: 'https://github.com/MuhammadHammadHami/p2u_web_automation_test.git',
        branch: 'main'

      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Cypress tests') {
      steps {
        sh 'npx cypress run'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', allowEmptyArchive: true
      archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowEmptyArchive: true
    }
  }
}
