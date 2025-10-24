document.addEventListener('DOMContentLoaded', () => {
            // --- REFACTORED AND ROBUST INITIALIZATION ---

            // Function to set up the accordion
            function setupAccordion() {
                const accordionContainer = document.getElementById('accordion-container');
                if (!accordionContainer) return;

                const weeklyPlan = [
                    { week: 1, focus: "Arrays & Hashing", daily: "Focus on array manipulations, sorting, and using hashmaps for frequency counting and lookups.", light: "Revise week's concepts. Solve 2-3 easy problems from <a href='https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/' target='_blank' class='text-highlight hover:underline'>Striver's Array Easy List</a>.", weekend: "<strong>Saturday:</strong> Solve <a href='https://leetcode.com/problems/sort-colors/' target='_blank' class='text-highlight hover:underline'>Sort Colors</a>, <a href='https://leetcode.com/problems/two-sum/' target='_blank' class='text-highlight hover:underline'>Two Sum</a>, <a href='https://leetcode.com/problems/merge-intervals/' target='_blank' class='text-highlight hover:underline'>Merge Intervals</a>.<br><strong>Sunday:</strong> <strong>Mock Test 1</strong> (MCQs + 1 Easy/1 Medium DSA Q). Review mistakes." },
                    { week: 2, focus: "Two Pointers & Sliding Window", daily: "Master these crucial patterns to optimize brute-force solutions.", light: "Read interview experiences on GFG/LeetCode Discuss for your target companies.", weekend: "<strong>Saturday:</strong> Solve <a href='https://leetcode.com/problems/container-with-most-water/' target='_blank' class='text-highlight hover:underline'>Container With Most Water</a>, <a href='https://leetcode.com/problems/longest-substring-without-repeating-characters/' target='_blank' class='text-highlight hover:underline'>Longest Substring Without Repeating Characters</a>, <a href='https://leetcode.com/problems/minimum-window-substring/' target='_blank' class='text-highlight hover:underline'>Minimum Window Substring</a>.<br><strong>Sunday:</strong> Catch up on backlogs or revise weak areas." },
                    { week: 3, focus: "Linked List & Binary Search", daily: "Cover all LL types. For BS, focus on the 'BS on Answers' pattern.", light: "Revise LL concepts (reversal, cycle detection). Watch summary videos.", weekend: "<strong>Saturday:</strong> Solve <a href='https://leetcode.com/problems/reverse-linked-list/' target='_blank' class='text-highlight hover:underline'>Reverse Linked List</a>, <a href='https://leetcode.com/problems/linked-list-cycle-ii/' target='_blank' class='text-highlight hover:underline'>Linked List Cycle II</a>, <a href='https://leetcode.com/problems/koko-eating-bananas/' target='_blank' class='text-highlight hover:underline'>Koko Eating Bananas</a>.<br><strong>Sunday:</strong> <strong>Mock Test 2</strong> (2 Medium DSA Qs). Review." },
                    { week: 4, focus: "Stacks & Queues (Heaps)", daily: "Learn standard applications and advanced patterns like Monotonic Stack and Priority Queues (Heaps).", light: "Solve 2-3 medium problems on Stacks/Queues like <a href='https://leetcode.com/problems/valid-parentheses/' target='_blank' class='text-highlight hover:underline'>Valid Parentheses</a>.", weekend: "<strong>Saturday:</strong> Solve <a href='https://leetcode.com/problems/largest-rectangle-in-histogram/' target='_blank' class='text-highlight hover:underline'>Largest Rectangle in Histogram</a>, <a href='https://leetcode.com/problems/find-median-from-data-stream/' target='_blank' class='text-highlight hover:underline'>Find Median from Data Stream</a>.<br><strong>Sunday:</strong> Revise all linear data structures." },
                    { week: 5, focus: "Recursion & Trees", daily: "Master recursion fundamentals. Cover traversals, views, and properties of Binary Trees.", light: "Watch Striver's recursion playlist. Solve basic recursion problems (factorial, Fibonacci).", weekend: "<strong>Saturday:</strong> Solve <a href='https://leetcode.com/problems/diameter-of-binary-tree/' target='_blank' class='text-highlight hover:underline'>Diameter of Binary Tree</a>, <a href='https://leetcode.com/problems/binary-tree-right-side-view/' target='_blank' class='text-highlight hover:underline'>Binary Tree Right Side View</a>, <a href='https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/' target='_blank' class='text-highlight hover:underline'>Lowest Common Ancestor</a>.<br><strong>Sunday:</strong> <strong>Mock Test 3</strong> (2 Medium DSA Qs). Review." },
                    { week: 6, focus: "BST & Tries", daily: "Focus on the properties of BSTs and the prefix-matching capabilities of Tries.", light: "Watch a System Design primer video (e.g., Gaurav Sen, freeCodeCamp).", weekend: "<strong>Saturday:</strong> Solve <a href='https://leetcode.com/problems/validate-binary-search-tree/' target='_blank' class='text-highlight hover:underline'>Validate Binary Search Tree</a>, <a href='https://leetcode.com/problems/implement-trie-prefix-tree/' target='_blank' class='text-highlight hover:underline'>Implement Trie</a>.<br><strong>Sunday:</strong> Revise all non-linear data structures." },
                    { week: 7, focus: "Graphs & Greedy", daily: "Cover graph traversals (BFS, DFS), and algorithms like Dijkstra's & MST. Learn the greedy approach.", light: "Review your 'Mistake Notebook' from the past 6 weeks.", weekend: "<strong>Saturday:</strong> Solve <a href='https://leetcode.com/problems/number-of-islands/' target='_blank' class='text-highlight hover:underline'>Number of Islands</a>, <a href='https://leetcode.com/problems/course-schedule-ii/' target='_blank' class='text-highlight hover:underline'>Course Schedule II</a>, <a href='https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/' target='_blank' class='text-highlight hover:underline'>N meetings in one room</a>.<br><strong>Sunday:</strong> <strong>Mock Test 4</strong> (1 Medium/1 Hard DSA Q). Review." },
                    { week: 8, focus: "DP & Bit Manipulation", daily: "Focus on core DP patterns (Memoization/Tabulation) and common bit manipulation tricks.", light: "Revise all your notes. Re-solve 3-4 problems you found difficult.", weekend: "<strong>Saturday:</strong> Solve <a href='https://leetcode.com/problems/coin-change/' target='_blank' class='text-highlight hover:underline'>Coin Change</a>, <a href='https://leetcode.com/problems/longest-increasing-subsequence/' target='_blank' class='text-highlight hover:underline'>Longest Increasing Subsequence</a>, <a href='https://leetcode.com/problems/number-of-1-bits/' target='_blank' class='text-highlight hover:underline'>Number of 1 Bits</a>.<br><strong>Sunday:</strong> <strong>Full Mock Interview</strong> with a peer or on Pramp." },
                    { week: 9, focus: "Revision of Core Topics", daily: "Revisit Arrays, Linked Lists, Trees, and Graphs. Solve mixed problems from these areas.", light: "Focus on time/space complexity analysis for each problem.", weekend: "<strong>Saturday:</strong> Solve <a href='https://leetcode.com/problems/3sum/' target='_blank' class='text-highlight hover:underline'>3Sum</a>, <a href='https://leetcode.com/problems/add-two-numbers/' target='_blank' class='text-highlight hover:underline'>Add Two Numbers</a>, <a href='https://leetcode.com/problems/binary-tree-maximum-path-sum/' target='_blank' class='text-highlight hover:underline'>Binary Tree Maximum Path Sum</a>.<br><strong>Sunday:</strong> <strong>Mock Test 5</strong> (Mixed topics, 2 Medium Qs)." },
                    { week: 10, focus: "Advanced DP & System Design Basics", daily: "Dive deeper into DP (e.g., Knapsack, Matrix Chain). Learn basic System Design concepts like Load Balancing, Caching.", light: "Watch System Design videos on YouTube (e.g., Gaurav Sen's playlist).", weekend: "<strong>Saturday:</strong> Solve <a href='https://leetcode.com/problems/partition-equal-subset-sum/' target='_blank' class='text-highlight hover:underline'>Partition Equal Subset Sum</a>, <a href='https://leetcode.com/problems/edit-distance/' target='_blank' class='text-highlight hover:underline'>Edit Distance</a>.<br><strong>Sunday:</strong> Design a simple system (e.g., URL Shortener) on paper." },
                    { week: 11, focus: "Mock Interviews & Weak Areas", daily: "Conduct daily mock interviews. Focus on communication and problem-solving under time constraints.", light: "Review past mock tests and identify patterns in mistakes.", weekend: "<strong>Saturday:</strong> Full mock interview on Pramp or with a peer.<br><strong>Sunday:</strong> Re-solve problems from weak areas (e.g., DP if struggling)." },
                    { week: 12, focus: "Final Revision & Optimization", daily: "Quick revision of all topics. Optimize code for time/space. Practice explaining solutions aloud.", light: "Compile a list of 50 must-know problems and solve them.", weekend: "<strong>Saturday:</strong> <strong>Final Mock Interview</strong> simulating real conditions.<br><strong>Sunday:</strong> Relax and review your progress. Prepare for applications." }
                ];

                accordionContainer.innerHTML = ''; // Clear existing content
                weeklyPlan.forEach(weekData => {
                    const card = document.createElement('div');
                    card.className = 'card overflow-hidden';
                    const button = document.createElement('button');
                    button.className = 'accordion-button w-full p-6 text-left flex justify-between items-center hover:bg-gray-200/50 transition-all duration-300';
                    button.innerHTML = `
                        <div>
                            <h3 class="text-lg sm:text-xl font-bold text-main">Week ${weekData.week}: ${weekData.focus}</h3>
                            <p class="text-sub text-sm mt-1">Click to expand/collapse</p>
                        </div>`;
                    const content = document.createElement('div');
                    content.className = 'accordion-content p-6 pt-0';
                    content.innerHTML = `<div class="space-y-4 text-sub border-t border-gray-200 dark:border-slate-700 pt-4 mt-4">
                            <div><h4 class="font-semibold text-main mb-1">Daily Plan (Mon-Fri):</h4><p>${weekData.daily}</p></div>
                            <div><h4 class="font-semibold text-main mb-1">Light Day (Wednesday):</h4><p>${weekData.light}</p></div>
                            <div><h4 class="font-semibold text-main mb-1">Weekend Plan (Sat-Sun):</h4><p>${weekData.weekend}</p></div>
                        </div>`;
                    card.appendChild(button);
                    card.appendChild(content);
                    accordionContainer.appendChild(card);
                    button.addEventListener('click', () => {
                        button.classList.toggle('open');
                        const contentEl = button.nextElementSibling;
                        if (contentEl.style.maxHeight) {
                            contentEl.style.maxHeight = null;
                        } else {
                            contentEl.style.maxHeight = contentEl.scrollHeight + "px";
                        }
                    });
                });
            }

            // Function to set up scroll animations
            function setupScrollAnimations() {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                }, { threshold: 0.1 });

                document.querySelectorAll('.scroll-fade-in').forEach(el => {
                    observer.observe(el);
                });
            }
            
            // Function to set up header scroll effect
            function setupHeaderScroll() {
                const header = document.getElementById('header');
                if (header) {
                    window.addEventListener('scroll', () => {
                        header.classList.toggle('shadow-lg', window.scrollY > 10);
                    });
                }
            }

            // Function to set up mobile menu
            function setupMobileMenu() {
                const menuBtn = document.getElementById('menu-btn');
                const mobileMenu = document.getElementById('mobile-menu');
                const menuLinks = document.querySelectorAll('.menu-link');

                if (menuBtn && mobileMenu) {
                    menuBtn.addEventListener('click', () => {
                        mobileMenu.classList.toggle('hidden');
                    });
                    menuLinks.forEach(link => {
                        link.addEventListener('click', () => {
                            mobileMenu.classList.add('hidden');
                        });
                    });
                }
            }

            // --- RUN ALL SETUP FUNCTIONS ---
            setupAccordion();
            setupScrollAnimations();
            setupHeaderScroll();
            setupMobileMenu();
        });
