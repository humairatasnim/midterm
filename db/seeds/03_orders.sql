-- Orders table seeds here
INSERT INTO orders (client_id, order_placed, order_approved, order_completed, estimated_time, order_status)
VALUES (1, '2023-03-03 20:17:25', NULL, NULL, NULL, true);

INSERT INTO orders (client_id, order_placed, order_approved, order_completed, estimated_time, order_status)
VALUES (1, '2023-03-02 20:17:25', NULL, NULL, NULL, true);

INSERT INTO orders (client_id, order_placed, order_approved, order_completed, estimated_time, order_status)
VALUES (1, '2023-03-02 20:17:25', '2023-03-02 21:17:25', NULL, 10, true);

INSERT INTO orders (client_id, order_placed, order_approved, order_completed, estimated_time, order_status)
VALUES (1, '2023-03-02 20:17:25', '2023-03-02 21:17:25', '2023-03-02 21:27:25', 10, true);
