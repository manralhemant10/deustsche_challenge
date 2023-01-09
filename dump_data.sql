-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: desutsche_challenge
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog_data`
--

DROP TABLE IF EXISTS `blog_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_data` (
  `blog_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `status` varchar(10) DEFAULT NULL,
  `userid` int NOT NULL,
  `creation_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`blog_id`),
  KEY `userid` (`userid`),
  CONSTRAINT `blog_data_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_data`
--

LOCK TABLES `blog_data` WRITE;
/*!40000 ALTER TABLE `blog_data` DISABLE KEYS */;
INSERT INTO `blog_data` VALUES (112,'first blog','see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.see this is the first blog.','DRAFT',32,'2022-06-05 18:12:14','2022-06-05 18:12:14'),(113,'second blog','second bloggggggggggggggggggggggggggggggggggggggggsecond bloggggggggggggggggggggggggggggggggggggggggsecond sdadadddddbloggggggggggggggggggggggggggggggggggggggggsecond bloggggggggggggggggggggggggggggggggggggggggsecond bloggggggggggggggggggggggggggggggggggggggggsecond bloggggggggggggggggggggggggggggggggggggggggsecond bloggggggggggggggggggggggggggggggggggggggggsecond bloggggggggggggggggggggggggggggggggggggggggsecond bloggggggggggggggggggggggggggggggggggggggggsecond bloggggggggggggggggggggggggggggggggggggggggsecond bloggggggggggggggggggggggggggggggggggggggggsecond bloggggggggggggggggggggggggggggggggggggggggsecond bloggggggggggggggggggggggggggggggggggggggggsecond bloggggggggggggggggggggggggggggggggggggggggsecond bloggggggggggggggggggggggggggggggggggggggggsecond blogggggggggggggggggggggggggggggggggggggggg','DRAFT',32,'2022-06-05 18:12:42','2022-06-05 18:12:42'),(114,'third blog','third333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333third333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333third333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333third333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333','UPDATED',32,'2022-06-05 18:13:03','2022-06-05 18:14:02'),(115,'fourth blog','fff34444444444444444444444444444444444444444444444444444444afff34444444444444444444444444444444444444444444444444444444afff34444444444444444444444444444444444444444444444444444444afff34444444444444444444444444444444444444444444444444444444afff34444444444444444444444444444444444444444444444444444444afff34444444444444444444444444444444444444444444444444444444afff34444444444444444444444444444444444444444444444444444444afff34444444444444444444444444444444444444444444444444444444afff34444444444444444444444444444444444444444444444444444444afff34444444444444444444444444444444444444444444444444444444afff34444444444444444444444444444444444444444444444444444444afff34444444444444444444444444444444444444444444444444444444a','DRAFT',32,'2022-06-05 18:13:21','2022-06-05 18:13:21'),(116,'new blog ','new bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew bloggggggggggggggggggggggggggnew blogggggggggggggggggggggggggg','ACTIVE',30,'2022-06-05 18:20:25','2022-06-05 18:20:25'),(117,'new blog 3','blog 2222222222222222222222222222222222222222222222333333333333333333333333333333333333333333333333333333333333333333333','ACTIVE',30,'2022-06-05 18:20:36','2022-06-05 18:21:01');
/*!40000 ALTER TABLE `blog_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endpoints_allowed`
--

DROP TABLE IF EXISTS `endpoints_allowed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endpoints_allowed` (
  `endpoints_id` int NOT NULL,
  `endpoint` varchar(255) DEFAULT NULL,
  `role_id` int DEFAULT NULL,
  PRIMARY KEY (`endpoints_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `endpoints_allowed_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `user_roles` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endpoints_allowed`
--

LOCK TABLES `endpoints_allowed` WRITE;
/*!40000 ALTER TABLE `endpoints_allowed` DISABLE KEYS */;
INSERT INTO `endpoints_allowed` VALUES (1,'/save',1),(2,'/publish',1),(3,'/save',2),(4,'/updateArticle',2),(5,'/updateArticle',2);
/*!40000 ALTER TABLE `endpoints_allowed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `second_auth`
--

DROP TABLE IF EXISTS `second_auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `second_auth` (
  `userid` int NOT NULL,
  `password_sec_auth` varchar(255) DEFAULT NULL,
  KEY `userid` (`userid`),
  CONSTRAINT `second_auth_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `second_auth`
--

LOCK TABLES `second_auth` WRITE;
/*!40000 ALTER TABLE `second_auth` DISABLE KEYS */;
INSERT INTO `second_auth` VALUES (29,'superadmin2'),(30,'admin2'),(31,'nomraluser2'),(32,'newuser2'),(33,'hemant2');
/*!40000 ALTER TABLE `second_auth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `update_blog`
--

DROP TABLE IF EXISTS `update_blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `update_blog` (
  `blog_id` int NOT NULL,
  `new_data` text,
  `new_title` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`blog_id`),
  CONSTRAINT `update_blog_ibfk_1` FOREIGN KEY (`blog_id`) REFERENCES `blog_data` (`blog_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `update_blog`
--

LOCK TABLES `update_blog` WRITE;
/*!40000 ALTER TABLE `update_blog` DISABLE KEYS */;
INSERT INTO `update_blog` VALUES (114,'third333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333third333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333third333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333third333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333444444444444444444444444444444444444444444444444444444444444444444444444444444444444444','third blog change');
/*!40000 ALTER TABLE `update_blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (1,'SUPERADMIN'),(2,'ADMIN'),(3,'VIEWER');
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role_id` int DEFAULT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `unique_username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (29,'superadmin','superadmin',1),(30,'admin','admin',2),(31,'normaluser','normaluser',3),(32,'newuser','newuser',2),(33,'hemant','hemant',3);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-06  0:10:25
