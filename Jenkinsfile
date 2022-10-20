pipeline {
    agent any
    
    tools {nodejs "16.17.0"}

    environment {
        AWS_DEFAULT_REGION="ap-south-1"
    }
    stages {
        stage('Install'){
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        // stage('Deploy'){
        //     stages{
        //         // stage("Remove old files"){
        //         //     steps{
        //         //         withCredentials([aws(accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'digiqt-aws-credentials', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]) {
        //         //         sh 'aws s3 sync ./dist s3://group-medical --delete --acl public-read'
        //         //         }
        //         //     }
        //         // }
        //         stage("Copy new files to s3 bucket"){
        //             steps{
        //                 withCredentials([aws(accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'digiqt-aws-credentials', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]) {
        //                 sh 'aws s3 sync ./dist s3://group-medical --acl public-read'
        //                 }
        //             }
        //         }
        //     }
        // }
    }
}