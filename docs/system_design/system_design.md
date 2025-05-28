# System Design Primer

System design interviews test your ability to **architect large-scale, real-world software systems**. They focus on scalability, performance, and tradeoffs — not just code.

---

## 📐 Core Concepts

| Concept                  | Description                                                    |
|--------------------------|----------------------------------------------------------------|
| Load Balancing           | Distribute traffic across multiple servers                     |
| Caching                  | Reduce load and latency with memory-based storage              |
| Database Sharding        | Split large DBs into smaller, more manageable parts            |
| Indexing                 | Improve query performance                                      |
| Rate Limiting            | Protect system from abuse or overload                          |
| Consistency Models       | Strong, eventual, causal                                       |
| CAP Theorem              | You can only pick 2 of Consistency, Availability, Partition    |
| Data Partitioning        | Horizontal (row-based) vs vertical (column-based)              |
| Messaging Queues         | Async processing and system decoupling                         |
| CDN                      | Serve static assets closer to users                           |
| Replication              | Read scalability and redundancy                                |

---

## 🛠 Design Process

1. **Clarify Requirements**
   - Functional: What should it do?
   - Non-functional: Latency, availability, consistency?
   - Constraints: # of users, QPS, data size?

2. **Define High-Level Components**
   - API gateway, frontend, backend, DB, cache

3. **Design Data Models**
   - ER diagram, schema, key relationships

4. **Choose Storage**
   - SQL vs NoSQL? Why?
   - Indexing and partitioning strategies

5. **Scale the System**
   - Add cache, CDN, load balancer
   - Handle failure: retry, replication, rate limiting

6. **Discuss Tradeoffs**
   - What breaks under load?
   - What if the DB goes down?
   - CAP theorem implications?

---

## 🧪 Practice Questions

| Question | Key Ideas |
|----------|-----------|
| Design a URL Shortener | Hashing, DB for redirection, scaling reads |
| Design Twitter Feed    | Timeline generation, fan-out, caching      |
| Design Rate Limiter    | Sliding window vs token bucket             |
| Design a File Storage Service (like Dropbox) | Metadata, chunking, consistency |
| Design a Chat System   | Message queues, WebSocket or polling       |
| Design Instagram       | Feed generation, media storage, CDN        |

---

## ⚖️ Common Tradeoffs

| Option A         | Option B         | Tradeoff                  |
|------------------|------------------|---------------------------|
| SQL              | NoSQL            | Structured vs scalable    |
| Push updates     | Pull updates     | Realtime vs consistency   |
| Vertical scaling | Horizontal       | Simpler vs robust         |
| Strong consistency | Eventual       | Data integrity vs uptime  |

---

## 📚 Resources

- [System Design Primer (GitHub)](https://github.com/donnemartin/system-design-primer)
- [Grokking the System Design Interview](https://www.educative.io/courses/grokking-the-system-design-interview)
- [Awesome Scalability (GitHub)](https://github.com/binhnguyennus/awesome-scalability)

---

## 💬 Tips

- Don't dive into tech too early — understand **requirements first**
- Always discuss **scale** (QPS, data size, storage, latency)
- Back-of-the-envelope calculations help show you're grounded
- Make your design **evolutionary**: start simple, scale up

---
