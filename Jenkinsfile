pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'feridsaad'
        FRONT_IMAGE    = "${DOCKERHUB_USER}/garderie-frontend"
        BACK_IMAGE     = "${DOCKERHUB_USER}/garderie-backend"
        IMAGE_TAG      = "${BUILD_NUMBER}"
    }

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                dir('frontend') {
                    sh 'npm ci'
                }
            }
        }

        stage('Test') {
            steps {
                dir('frontend') {
                    sh 'npm test'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t $FRONT_IMAGE:$IMAGE_TAG -t $FRONT_IMAGE:latest ./frontend'
            }
        }

        stage('Build Backend') {
            steps {
                sh 'docker build -t $BACK_IMAGE:$IMAGE_TAG -t $BACK_IMAGE:latest ./backend'
            }
        }

        stage('Push Frontend') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds',
                                                  usernameVariable: 'DH_USER',
                                                  passwordVariable: 'DH_PASS')]) {
                    sh '''
                        echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin
                        docker push $FRONT_IMAGE:$IMAGE_TAG
                        docker push $FRONT_IMAGE:latest
                    '''
                }
            }
        }

        stage('Push Backend') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds',
                                                  usernameVariable: 'DH_USER',
                                                  passwordVariable: 'DH_PASS')]) {
                    sh '''
                        echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin
                        docker push $BACK_IMAGE:$IMAGE_TAG
                        docker push $BACK_IMAGE:latest
                    '''
                }
            }
        }
    }

    post {
        always {
            sh 'docker logout || true'
        }
        success {
            echo 'Pipeline terminé avec succès.'
        }
        failure {
            echo 'Pipeline en échec : voir les logs.'
        }
    }
}
