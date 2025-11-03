/**
 * Merges discontinuous time ranges within a given threshold.
 *
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap) [cite: 32]
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged [cite: 33]
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges [cite: 34]
 */
const mergeTimeRanges = (ranges, threshold) => {
  if (!ranges || ranges.length === 0) {
    return [];
  }

  // Sort ranges by start time to process them in order
  const sortedRanges = ranges.slice().sort((a, b) => a[0] - b[0]);

  // Initialize the merged list with the first range
  const mergedRanges = [sortedRanges[0]];

  for (let i = 1; i < sortedRanges.length; i++) {
    const currentRange = sortedRanges[i];
    const lastMergedRange = mergedRanges[mergedRanges.length - 1];

    const [lastStart, lastEnd] = lastMergedRange;
    const [currentStart, currentEnd] = currentRange;

    // Check if the current range should be merged with the last one
    // (if they overlap, touch, or are within the threshold gap)
    if (currentStart < lastEnd + threshold) {
      // Merge: update the end time of the last range
      lastMergedRange[1] = Math.max(lastEnd, currentEnd);
    } else {
      // No merge: add the current range as a new entry
      mergedRanges.push(currentRange);
    }
  }

  return mergedRanges;
};

// Export the function as a NodeJS module 
module.exports = {
  mergeTimeRanges
};