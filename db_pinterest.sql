-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               8.0.33 - MySQL Community Server - GPL
-- Server OS:                    Linux
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for db_pinterest
CREATE DATABASE IF NOT EXISTS `db_pinterest` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_pinterest`;

-- Dumping structure for table db_pinterest.Comment
CREATE TABLE IF NOT EXISTS `Comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `authorId` int NOT NULL,
  `pinId` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Comment_authorId_fkey` (`authorId`),
  KEY `Comment_pinId_fkey` (`pinId`),
  CONSTRAINT `Comment_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Comment_pinId_fkey` FOREIGN KEY (`pinId`) REFERENCES `Pin` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table db_pinterest.Comment: ~18 rows (approximately)
INSERT INTO `Comment` (`id`, `content`, `authorId`, `pinId`, `createdAt`, `updatedAt`) VALUES
	(1, 'test comment', 2, 46, '2023-11-25 09:21:37.845', '2023-11-29 16:21:37.000'),
	(3, 'test comment', 2, 46, '2023-11-25 09:21:37.845', '2023-11-29 16:21:37.000'),
	(4, 'test comment', 2, 46, '2023-11-25 09:21:37.845', '2023-11-29 16:21:37.000'),
	(6, 'test comment', 2, 46, '2023-11-25 09:21:37.845', '2023-11-29 16:21:37.000'),
	(7, 'test comment', 2, 46, '2023-11-25 09:21:37.845', '2023-11-29 16:21:37.000'),
	(9, 'test comment🤧  zxc💝xzczxc', 2, 46, '2023-11-25 09:21:37.845', '2023-12-05 16:56:24.387'),
	(16, 'asdasd', 2, 46, '2023-12-01 20:00:49.322', '2023-12-01 20:00:49.322'),
	(21, 'asdasd', 2, 46, '2023-12-01 20:34:47.417', '2023-12-01 20:34:47.417'),
	(22, 'asdasd', 2, 46, '2023-12-01 20:37:04.228', '2023-12-01 20:37:04.228'),
	(23, 'test update comment 👹', 2, 46, '2023-12-01 20:37:14.130', '2023-12-05 16:55:02.181'),
	(25, 'comm🫠ent test ', 2, 56, '2023-12-03 13:02:16.885', '2023-12-29 06:46:04.844'),
	(28, 'test', 2, 57, '2023-12-04 17:41:59.648', '2023-12-04 17:41:59.648'),
	(29, 'test comment😊🤲', 2, 55, '2023-12-05 16:53:37.269', '2023-12-05 16:54:09.834'),
	(30, 'test 😆 thử comment 😄', 1, 57, '2023-12-09 17:01:34.821', '2023-12-09 17:01:34.821'),
	(34, 'asdasdasd', 11, 59, '2023-12-09 19:47:22.596', '2023-12-09 19:47:37.415'),
	(35, 'asdadsasdasd', 11, 59, '2023-12-09 19:47:24.557', '2023-12-09 19:47:40.800'),
	(36, 'asdasd', 11, 59, '2023-12-09 19:47:26.383', '2023-12-09 19:49:44.941');

-- Dumping structure for table db_pinterest.Pin
CREATE TABLE IF NOT EXISTS `Pin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `path` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `authorId` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Pin_path_key` (`path`),
  KEY `Pin_authorId_fkey` (`authorId`),
  CONSTRAINT `Pin_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table db_pinterest.Pin: ~45 rows (approximately)
INSERT INTO `Pin` (`id`, `title`, `description`, `path`, `authorId`, `createdAt`, `updatedAt`) VALUES
	(16, 'Avatar', 'avatar ở khách sạn', '/1700859441480-5.jpg', 2, '2023-11-04 20:57:21.511', '2023-11-24 20:57:21.511'),
	(17, '', '', '/1700860855323-4.jpg', 2, '2023-11-24 21:20:55.366', '2023-11-24 21:20:55.366'),
	(18, 'asd', 'asd', '/1700860866578-7.jpg', 2, '2023-11-24 21:21:06.605', '2023-11-24 21:21:06.605'),
	(19, '', '', '/1700860964974-6.jpg', 2, '2023-11-24 21:22:44.994', '2023-11-24 21:22:44.994'),
	(20, '', '', '/1700860970929-6.jpg', 2, '2023-11-24 21:22:50.961', '2023-11-24 21:22:50.961'),
	(21, 'kasdkasd', 'askdkasd', '/1700860984066-7.jpg', 2, '2023-11-24 21:23:04.094', '2023-11-24 21:23:04.094'),
	(22, '', '', '/1700861258003-5.jpg', 2, '2023-11-24 21:27:38.024', '2023-11-24 21:27:38.024'),
	(23, '', '', '/1700863667721-1.jpg', 2, '2023-11-24 22:07:47.746', '2023-11-24 22:07:47.746'),
	(24, '', '', '/1700865124720-3.jpg', 2, '2023-11-24 22:32:04.745', '2023-11-24 22:32:04.745'),
	(25, '', '', '/1700865127051-6.jpg', 2, '2023-11-24 22:32:07.068', '2023-11-24 22:32:07.068'),
	(26, '', '', '/1700865129230-7.jpg', 2, '2023-11-24 22:32:09.246', '2023-11-24 22:32:09.246'),
	(27, '', '', '/1700865132156-5.jpg', 2, '2023-11-24 22:32:12.177', '2023-11-24 22:32:12.177'),
	(28, '', '', '/1700865134591-2.jpg', 2, '2023-11-24 22:32:14.606', '2023-11-24 22:32:14.606'),
	(29, '', '', '/1700865136943-1.jpg', 2, '2023-11-24 22:32:16.957', '2023-11-24 22:32:16.957'),
	(30, '', '', '/1700865139447-4.jpg', 2, '2023-11-24 22:32:19.465', '2023-11-24 22:32:19.465'),
	(31, '', '', '/1700865187701-dsc01454.JPG', 2, '2023-11-24 22:33:07.722', '2023-11-24 22:33:07.722'),
	(32, '', '', '/1700865192100-dsc01475.JPG', 2, '2023-11-24 22:33:12.117', '2023-11-24 22:33:12.117'),
	(33, '', '', '/1700865195900-dsc01503.JPG', 2, '2023-11-24 22:33:15.930', '2023-11-24 22:33:15.930'),
	(34, '', '', '/1700865199423-dsc01502.JPG', 2, '2023-11-24 22:33:19.443', '2023-11-24 22:33:19.443'),
	(35, '', '', '/1700865203828-dsc01500.JPG', 2, '2023-11-24 22:33:23.856', '2023-11-24 22:33:23.856'),
	(36, '', '', '/1700865208219-dsc01480.JPG', 2, '2023-11-24 22:33:28.247', '2023-11-24 22:33:28.247'),
	(37, '', '', '/1700865252686-dsc01467.JPG', 2, '2023-11-24 22:34:12.715', '2023-11-24 22:34:12.715'),
	(38, '', '', '/1700865255875-dsc01478.JPG', 2, '2023-11-24 22:34:15.901', '2023-11-24 22:34:15.901'),
	(39, '', '', '/1700865259013-dsc01473.JPG', 2, '2023-11-24 22:34:19.033', '2023-11-24 22:34:19.033'),
	(40, '', '', '/1700865262674-dsc01472.JPG', 2, '2023-11-24 22:34:22.705', '2023-11-24 22:34:22.705'),
	(41, '', '', '/1700865266108-dsc01462.JPG', 2, '2023-11-24 22:34:26.137', '2023-11-24 22:34:26.137'),
	(43, '', '', '/1700865272082-dsc01457.JPG', 2, '2023-11-24 22:34:32.113', '2023-11-24 22:34:32.113'),
	(44, '', '', '/1700865275571-dsc01480.JPG', 2, '2023-11-24 22:34:35.601', '2023-11-24 22:34:35.601'),
	(45, '', '', '/1700865279180-dsc01497.JPG', 2, '2023-11-24 22:34:39.206', '2023-11-24 22:34:39.206'),
	(46, '', '', '/1700865284304-dsc01499.JPG', 2, '2023-11-24 22:34:44.322', '2023-11-24 22:34:44.322'),
	(47, '', '', '/1700865296722-dsc01479.JPG', 2, '2023-11-24 22:34:56.750', '2023-11-24 22:34:56.750'),
	(49, '', '', '/1700865683213-dsc01468.JPG', 2, '2023-11-24 22:41:23.237', '2023-11-24 22:41:23.237'),
	(50, '', '', '/1701135810816-dsc01474.JPG', 2, '2023-11-28 14:00:00.000', '2023-11-28 01:43:30.993'),
	(51, '', '', '/1701248291843-dsc01468.JPG', 2, '2023-11-29 08:58:11.896', '2023-11-30 08:58:11.896'),
	(52, '', '', '/1701434959908-vonic-1.png', 2, '2023-12-01 12:49:19.960', '2023-12-01 12:49:19.960'),
	(53, '', '', '/1701434964068-vonic-1.png', 2, '2023-12-01 12:49:24.088', '2023-12-01 12:49:24.088'),
	(54, '', '', '/1701434980853-vonic-2.png', 2, '2023-12-01 12:49:40.875', '2023-12-01 12:49:40.875'),
	(55, '', '', '/1701435424387-vonic-2.png', 2, '2023-12-01 12:57:04.424', '2023-12-01 12:57:04.424'),
	(56, 'Vonic SoftWare 2024', 'Ảnh công ty gia đình asdasdasdasd', '/1701435768195-vonic-2.png', 2, '2023-12-01 13:02:48.230', '2023-12-29 06:55:23.613'),
	(57, '', '', '/1701461573747-vonic-2.png', 2, '2023-12-01 20:12:53.784', '2023-12-01 20:12:53.784'),
	(58, '', '', '/1702149361916-vonic-2.png', 11, '2023-12-09 19:16:02.942', '2023-12-09 19:16:02.942'),
	(59, '', '', '/1702149455662-vonic-1.png', 11, '2023-12-09 19:17:36.655', '2023-12-09 19:17:36.655'),
	(60, '', '', '/1703845801327-vonic-2.png', 2, '2023-12-29 10:30:01.370', '2023-12-29 10:30:01.370'),
	(61, '', '', '/1703845813495-vonic-1.png', 2, '2023-12-29 10:30:13.526', '2023-12-29 10:30:13.526'),
	(62, '', '', '/1703845823446-vonic-2.png', 2, '2023-12-29 10:30:23.471', '2023-12-29 10:30:23.471'),
	(63, '', '', '/1703846184586-vonic-2.png', 2, '2023-12-29 10:36:24.608', '2023-12-29 10:36:24.608');

-- Dumping structure for table db_pinterest.Saved
CREATE TABLE IF NOT EXISTS `Saved` (
  `userId` int NOT NULL,
  `pinId` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`userId`,`pinId`),
  KEY `Saved_pinId_fkey` (`pinId`),
  CONSTRAINT `Saved_pinId_fkey` FOREIGN KEY (`pinId`) REFERENCES `Pin` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Saved_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table db_pinterest.Saved: ~39 rows (approximately)
INSERT INTO `Saved` (`userId`, `pinId`, `createdAt`, `updatedAt`) VALUES
	(1, 28, '2023-12-09 18:46:47.007', '2023-12-09 18:46:47.007'),
	(1, 29, '2023-12-09 18:46:46.405', '2023-12-09 18:46:46.405'),
	(1, 33, '2023-12-09 18:46:45.275', '2023-12-09 18:46:45.275'),
	(1, 35, '2023-12-09 18:46:44.558', '2023-12-09 18:46:44.558'),
	(1, 44, '2023-12-09 18:46:40.881', '2023-12-09 18:46:40.881'),
	(1, 45, '2023-12-09 18:46:26.360', '2023-12-09 18:46:26.360'),
	(1, 47, '2023-12-09 18:46:41.877', '2023-12-09 18:46:41.877'),
	(1, 49, '2023-12-09 18:46:42.899', '2023-12-09 18:46:42.899'),
	(1, 55, '2023-12-09 17:00:16.282', '2023-12-09 17:00:16.282'),
	(1, 56, '2023-12-09 17:00:15.556', '2023-12-09 17:00:15.556'),
	(1, 57, '2023-12-09 17:00:14.716', '2023-12-09 17:00:14.716'),
	(2, 16, '2023-12-09 16:58:43.972', '2023-12-09 16:58:43.972'),
	(2, 33, '2023-12-09 16:56:37.197', '2023-12-09 16:56:37.197'),
	(2, 34, '2023-12-29 05:46:36.717', '2023-12-29 05:46:36.717'),
	(2, 35, '2023-12-09 16:56:28.439', '2023-12-09 16:56:28.439'),
	(2, 40, '2023-12-09 16:58:46.480', '2023-12-09 16:58:46.480'),
	(2, 53, '2023-12-09 16:53:36.562', '2023-12-09 16:53:36.562'),
	(2, 54, '2023-12-09 16:53:35.450', '2023-12-09 16:53:35.450'),
	(2, 55, '2023-12-09 16:56:21.728', '2023-12-09 16:56:21.728'),
	(2, 56, '2023-12-29 05:46:28.227', '2023-12-29 05:46:28.227'),
	(2, 59, '2023-12-11 17:05:57.603', '2023-12-11 17:05:57.603'),
	(11, 39, '2023-12-10 08:13:08.390', '2023-12-10 08:13:08.390'),
	(11, 40, '2023-12-10 08:13:03.654', '2023-12-10 08:13:03.654'),
	(11, 41, '2023-12-10 08:13:01.790', '2023-12-10 08:13:01.790'),
	(11, 43, '2023-12-10 08:13:05.996', '2023-12-10 08:13:05.996'),
	(11, 44, '2023-12-10 08:13:06.949', '2023-12-10 08:13:06.949'),
	(11, 45, '2023-12-10 08:12:59.827', '2023-12-10 08:12:59.827'),
	(11, 46, '2023-12-10 08:12:57.811', '2023-12-10 08:12:57.811'),
	(11, 47, '2023-12-10 08:12:55.149', '2023-12-10 08:12:55.149'),
	(11, 49, '2023-12-10 08:12:56.225', '2023-12-10 08:12:56.225'),
	(11, 51, '2023-12-10 08:12:15.383', '2023-12-10 08:12:15.383'),
	(11, 53, '2023-12-10 08:12:44.631', '2023-12-10 08:12:44.631'),
	(11, 54, '2023-12-09 19:17:50.952', '2023-12-09 19:17:50.952'),
	(11, 55, '2023-12-09 19:15:45.863', '2023-12-09 19:15:45.863'),
	(11, 56, '2023-12-09 19:15:46.585', '2023-12-09 19:15:46.585'),
	(11, 57, '2023-12-09 19:15:47.689', '2023-12-09 19:15:47.689'),
	(11, 58, '2023-12-10 08:12:11.888', '2023-12-10 08:12:11.888'),
	(11, 59, '2023-12-10 08:12:10.721', '2023-12-10 08:12:10.721');

-- Dumping structure for table db_pinterest.User
CREATE TABLE IF NOT EXISTS `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int NOT NULL,
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userName` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`),
  UNIQUE KEY `User_userName_key` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table db_pinterest.User: ~6 rows (approximately)
INSERT INTO `User` (`id`, `email`, `password`, `fullName`, `age`, `avatar`, `userName`, `about`, `createdAt`, `updatedAt`) VALUES
	(1, 'hatram@gmail.com', '$2b$10$XiHX7UgJNOA9vLOm.T/IQOm9gH4Qn8Snkjm63K3CWLM04vXn5W0ca', 'Em bé ỉn', 20, 'bein.jpg', 'zamzam', NULL, '2023-11-17 05:07:39.451', '2023-11-18 13:15:28.108'),
	(2, 'duybinh@gmail.com', '$2b$10$HfPzxwNCjGiQQQ00coKntOHwSIvPzIynAZkej6UgcozPoc4R/zjI2', 'Nguyễn Duy Bình', 20, '/1702316010012-6.jpg', 'SimpleB96', 'Mình tự do, do tự mình !!!', '2023-11-18 18:35:32.478', '2023-12-29 05:52:58.513'),
	(8, 'simple@gmail.com', '$2b$10$VlYHkg.hxbBUi2Xm/DpmlOO.0s071lCESRNy.HRfig285ceDpm.NC', 'Nguyễn Duy Bình', 18, NULL, NULL, NULL, '2023-11-21 11:28:26.730', '2023-11-21 11:28:26.730'),
	(9, 'simplebb@gmail.com', '$2b$10$mGvWMyDqykvfoYUIpT4JgO2IRvP0rlhQ1VhbWntvoPuz0pwIfK73G', 'Nguyễn Duy Bình', 18, NULL, NULL, NULL, '2023-11-21 11:29:05.748', '2023-11-21 11:29:05.748'),
	(10, 'duybinh20@gmail.com', '$2b$10$fU/ND4uSzN3RHhbnqYU5WO/TOCYN3UqL4Ui7vgBYkQchblldPoQ4C', 'Nguyễn Duy Bình', 18, NULL, NULL, NULL, '2023-11-21 11:29:44.807', '2023-11-21 11:29:44.807'),
	(11, 'simplecheck@gmail.com', '$2b$10$lrohxFz53vi4XJQzLcUU3uAF9Yvt31NR/yf9JBQ/eOwDYJJATZroi', 'Simple Check', 18, NULL, NULL, NULL, '2023-12-09 18:53:55.009', '2023-12-09 18:53:55.009');

-- Dumping structure for table db_pinterest._prisma_migrations
CREATE TABLE IF NOT EXISTS `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table db_pinterest._prisma_migrations: ~0 rows (approximately)
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
	('2a8603b2-d5a8-4995-acf7-bcf21b33b06b', '98f53c4ffc326b37475b56007f238434efe4cb124ff83dcc18ea9afe7c788e25', '2023-12-11 11:37:27.740', '20231211113727_update_user', NULL, NULL, '2023-12-11 11:37:27.540', 1),
	('3051c992-78c9-4fb3-8ecc-b06f4011825c', 'ade2b6d8ff60ca06eebe7927c1d2f088a59ce23e4d0e263325a694f898fa5140', '2023-11-17 05:07:16.021', '20231117050714_init', NULL, NULL, '2023-11-17 05:07:14.644', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
