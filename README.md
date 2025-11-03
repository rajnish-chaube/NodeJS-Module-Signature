# SDE Assignment: Merge Discontinuous Time Ranges

> Solution by Rajnish Chaube

## Overview

This repository contains the solution for a Software Development Engineer (SDE) coding challenge. The objective is to implement a NodeJS module that merges discontinuous time ranges based on a given threshold.

The project consists of:
* `my-module.js`: The NodeJS module containing the `mergeTimeRanges` solution.
* `package.json`: Project configuration file.
* `test.js`: A test script to verify the solution against all provided examples.

## Problem Statement

The challenge is to implement a function `mergeTimeRanges(ranges, threshold)` that takes an unsorted array of time ranges and a gap threshold.

* **Input**:
    1.  `ranges`: An array of `[start, end]` tuples. The `start` time is inclusive, and the `end` time is exclusive. Ranges may overlap or be unsorted.
    2.  `threshold`: A number in milliseconds.

* **Logic**:
    * All overlapping or touching ranges must be merged.
    * Any ranges separated by a gap that is **strictly smaller than** the `threshold` must also be merged.
    * A gap *equal to or greater than* the threshold should not be merged.

* **Output**: A new array containing the sorted, non-overlapping, and fully merged time ranges.

## Solution

The implemented solution in `my-module.js` follows an efficient, time-sorted approach:

1.  **Sort**: The input `ranges` array is first sorted by the `start` time. This is the most critical step, as it ensures ranges are processed in chronological order.
2.  **Initialize**: A new `mergedRanges` array is initialized with the very first range from the sorted list.
3.  **Iterate and Merge**: The algorithm then iterates through the remaining sorted ranges (starting from the second one), comparing each `currentRange` to the `lastMergedRange` in the `mergedRanges` list.
4.  **Threshold Logic**: A merge is triggered if the gap between the ranges is strictly smaller than the threshold. The exact logic used is:
    `currentRange.start < lastMergedRange.end + threshold`
    * If this condition is **true**, the ranges are merged by updating the `lastMergedRange.end` time to be the maximum of the two end times (`Math.max(lastMergedRange.end, currentRange.end)`).
    * If this condition is **false**, the gap is too large, and the `currentRange` is added as a new, separate entry in the `mergedRanges` array.

## How to Use

### 1. Installation

Clone the repository and install the (zero) dependencies:

```bash
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
cd YOUR_REPO_NAME
npm install
2. Running Tests
