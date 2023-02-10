-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 31.12.2018 klo 13:04
-- Palvelimen versio: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `keskustelupalsta`
--
CREATE DATABASE IF NOT EXISTS `keskustelupalsta` DEFAULT CHARACTER SET utf8 COLLATE utf8_swedish_ci;
USE `keskustelupalsta`;

-- --------------------------------------------------------

--
-- Rakenne taululle `keskustelut`
--

CREATE TABLE `keskustelut` (
  `id` int(11) NOT NULL,
  `otsikko` text COLLATE utf8_swedish_ci NOT NULL,
  `sisalto` text COLLATE utf8_swedish_ci NOT NULL,
  `kirjoittaja` text COLLATE utf8_swedish_ci NOT NULL,
  `aikaleima` double NOT NULL,
  `vastaukset` int(11) NOT NULL,
  `viimeisinkommentti` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

-- --------------------------------------------------------

--
-- Rakenne taululle `viestit`
--

CREATE TABLE `viestit` (
  `id` int(11) NOT NULL,
  `viesti` text COLLATE utf8_swedish_ci NOT NULL,
  `kirjoittaja` text COLLATE utf8_swedish_ci NOT NULL,
  `uutisid` int(11) NOT NULL,
  `aikaleima` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `keskustelut`
--
ALTER TABLE `keskustelut`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `viestit`
--
ALTER TABLE `viestit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `keskustelut`
--
ALTER TABLE `keskustelut`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `viestit`
--
ALTER TABLE `viestit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
