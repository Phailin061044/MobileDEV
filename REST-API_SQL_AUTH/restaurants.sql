-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2023 at 11:03 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurants`
--
create database restaurants  CHARACTER SET utf8 COLLATE utf8_general_ci;   
use restaurants;
-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `imageurl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `type`, `imageurl`) VALUES
(1, 'กล่องดินสอ - ถนนดินสอ', 'Coupon, Bakery & Pastries', 'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2022122007022854180/detail/menueditor_item_2b0ddaff730c4cc78cdd16c596f834ce_1671519662878526505.webp'),
(25, 'TASTE OF INDIA - ถนนข้าวสาร', 'Coupon, อาหารตามสั่ง', 'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021030607400960533/detail/menueditor_item_7f240a166d23466aba10c7eac50a3a53_1615016387403525487.webp'),
(26, 'เช็งซิมอี๊ - เสาชิงช้า', 'น้ำแข็งไสอิอิ', 'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2022081114531035972/detail/menueditor_item_822695e537c241a794ff35a7c4a133c9_1660229572664968735.webp'),
(27, 'the Mango Garden เดอะแมงโก้ การ์เด้น - ถนนมหาไชย', 'Coupon, Small Bites/Snacks', 'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2020100905415472487/detail/menueditor_item_5b3b2c4281a9430e8b272af16ba8860d_1602222088796966585.webp'),
(30, 'Bally craft steak - บวรนิเวศ', 'Coupon, สเต็ก', 'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2022012203592233168/detail/menueditor_item_754a919ff9e246e59d36e1d8c1daeb6f_1649155867405400148.webp'),
(31, 'เจ๊ดาวข้าวแกง ท่าน้ำราชวงศ์ - ถ.ท่าน้ำราชวงศ์', 'Coupon, สตรีทฟู้ด', 'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021080315300491918/detail/menueditor_item_f32d65d1b8b143cc99068f0655f98039_1628004590428416300.webp'),
(32, 'Gusto Koffie (กัสโต้คอฟฟี่) - สภาหอการค้าไทย', 'Coupon, ชา กาแฟ', 'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2022012708400093582/detail/menueditor_item_b15995e1af894b33908d514c20efbcba_1643272756865282358.webp'),
(33, 'เป็นหนึ่ง ก๋วยเตี๋ยวต้มยำ เย็นตาโฟ - ถนนตรีมิตร', 'Coupon, อาหารเส้น', 'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2020021305552504950/detail/menueditor_item_aeef04ca8bc14aa08d5005523aa9ff52_1623916754445860731.webp');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'user', '2023-01-11 09:31:06', '2023-01-11 09:31:06'),
(2, 'moderator', '2023-01-11 09:31:06', '2023-01-11 09:31:06'),
(3, 'admin', '2023-01-11 09:31:06', '2023-01-11 09:31:06');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Phailin', 'phailin30913@gmail.com', '$2a$08$3ovdXkWaCD.FfF63mQ3iB.MJD3v9eIPtA7BGBJpPwsE2U.a3.6f3y', '2023-01-11 09:31:10', '2023-01-11 09:31:10');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`createdAt`, `updatedAt`, `roleId`, `userId`) VALUES
('2023-01-11 09:31:10', '2023-01-11 09:31:10', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`roleId`,`userId`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
