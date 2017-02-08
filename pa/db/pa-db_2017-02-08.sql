-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 08, 2017 at 04:10 PM
-- Server version: 5.6.34
-- PHP Version: 7.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pa`
--

-- --------------------------------------------------------

--
-- Table structure for table `pressione`
--

CREATE TABLE `pressione` (
  `id` int(11) UNSIGNED NOT NULL,
  `datamisurazione` timestamp NULL DEFAULT NULL,
  `sistolica` int(11) UNSIGNED DEFAULT NULL,
  `diastolica` int(11) UNSIGNED DEFAULT NULL,
  `peso` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pressione`
--

INSERT INTO `pressione` (`id`, `datamisurazione`, `sistolica`, `diastolica`, `peso`) VALUES
(17, '2017-02-08 22:00:00', 34, 44, 23);

-- --------------------------------------------------------

--
-- Table structure for table `temperatura`
--

CREATE TABLE `temperatura` (
  `id` int(10) UNSIGNED NOT NULL,
  `valore` int(10) UNSIGNED NOT NULL,
  `datamisurazione` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `temperatura`
--

INSERT INTO `temperatura` (`id`, `valore`, `datamisurazione`) VALUES
(2, 36, '2017-02-08 15:09:53'),
(4, 36, '2017-01-31 22:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pressione`
--
ALTER TABLE `pressione`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `temperatura`
--
ALTER TABLE `temperatura`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pressione`
--
ALTER TABLE `pressione`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `temperatura`
--
ALTER TABLE `temperatura`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
