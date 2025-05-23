pipeline {
  agent any

  tools {
    nodejs 'Node16' // Set this name under Jenkins > Global Tool Config
  }

  environment {
    CYPRESS_BASE_URL = 'https://your-web-app-url.com' // Replace with your actual base URL if needed
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/MuhammadHammadHami/p2u_web_automation_test.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh 'npx cypress run'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', allowEmptyArchive: true
    }
  }
}
