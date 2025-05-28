# Dynamic Programming

Dynamic Programming (DP) is a powerful optimization technique used to solve problems with **overlapping subproblems** and **optimal substructure**.

---

## 🧠 Key Concepts

- **Memoization**: Top-down recursion with caching
- **Tabulation**: Bottom-up iteration
- **State definition**: Clearly define what each `dp[i]` represents
- **Transition relation**: Determine how current state builds from previous ones

---

## 🧰 Common Types of DP

| Type                   | Examples                                      |
|------------------------|-----------------------------------------------|
| 1D DP                  | Fibonacci, Climbing Stairs                    |
| 2D DP (grid)           | Unique Paths, Longest Common Subsequence     |
| Subset DP              | Knapsack, Target Sum                         |
| DP with Choices        | House Robber, Coin Change                    |
| DP on Strings          | Palindromes, Edit Distance                   |
| DP on Trees/Graphs     | Tree DP, DAG longest path                    |

---

## 💻 Example Problems

| Problem | Link | Pattern |
|--------|------|---------|
| Climbing Stairs | [LC #70](https://leetcode.com/problems/climbing-stairs/) | 1D DP |
| House Robber | [LC #198](https://leetcode.com/problems/house-robber/) | DP with Choices |
| Coin Change | [LC #322](https://leetcode.com/problems/coin-change/) | Unbounded Knapsack |
| Longest Palindromic Substring | [LC #5](https://leetcode.com/problems/longest-palindromic-substring/) | 2D DP |
| Edit Distance | [LC #72](https://leetcode.com/problems/edit-distance/) | 2D DP (Strings) |

---

## 📝 Templates

### Top-Down (Memoization)
def dp(i):
    if i in memo:
        return memo[i]
    if base_case(i):
        return result
    memo[i] = combine(dp(i-1), dp(i-2), ...)
    return memo[i]

### Bottom-Up (Tabulation)
dp = [0] * (n + 1)
dp[0] = base_case
for i in range(1, n + 1):
    dp[i] = combine(dp[i-1], dp[i-2], ...)
return dp[n]