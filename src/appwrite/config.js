import {Client, ID, Databases, Storage, Query} from 'appwrite'
import customConfiguration from '../conf/conf';

export class DatabaseService{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client.setEndpoint(customConfiguration.appwriteUrl)
                    .setProject(customConfiguration.appwriteProjectId)
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);

    }

    async createPost({title, slug, content, featuredImage, status, userId}){
            try {
                await this.databases.createDocument(
                    customConfiguration.appwriteDatabaseId,
                    customConfiguration.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId
                    }
                )
            } catch (error) {
                throw error
            }
    }

    async updateDocument(slug,{title, content, featuredImage, status}){
        try {
            await this.databases.updateDocument(customConfiguration.appwriteDatabaseId, 
                customConfiguration.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Error")
        }
    }
    async deleteDocument(slug){
        try {
            await this.databases.deleteDocument(customConfiguration.appwriteDatabaseId,
                customConfiguration.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("eror")
            return false;
        }
    }
    async getDocument(slug){
        try {
            return await this.databases.getDocument(customConfiguration.appwriteDatabaseId,
                customConfiguration.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("error")
        }
    }
    async getAllDocument(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(customConfiguration.appwriteDatabaseId,
                customConfiguration.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("error")
        }
    }

    async fileUpload(file){
        try {
            await this.bucket.createFile(customConfiguration.appwriteBucketId,
                ID.unique,
                file
            )
        } catch (error) {
            console.log("error")
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(customConfiguration.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("error")
        }
    }
    getFilePreview(fileId){
        return this.getFilePreview(
            customConfiguration.appwriteBucketId,
            fileId

        )
    }
    
}

const databaseService=new DatabaseService();

export default databaseService;