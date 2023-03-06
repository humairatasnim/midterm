-- Orders table seeds here
INSERT INTO orders (client_id, order_placed, order_approved, order_completed, estimated_time, order_status)
VALUES (5, CURRENT_TIMESTAMP, NULL, NULL, NULL, true);

INSERT INTO orders (client_id, order_placed, order_approved, order_completed, estimated_time, order_status)
VALUES (3, CURRENT_TIMESTAMP - INTERVAL '10 MINUTES', CURRENT_TIMESTAMP - INTERVAL '8 MINUTES', NULL, 10, true);

INSERT INTO orders (client_id, order_placed, order_approved, order_completed, estimated_time, order_status)
VALUES (4, CURRENT_TIMESTAMP - INTERVAL '10 MINUTES', CURRENT_TIMESTAMP - INTERVAL '8 MINUTES', NULL, 10, true);

INSERT INTO orders (client_id, order_placed, order_approved, order_completed, estimated_time, order_status)
VALUES (5, CURRENT_TIMESTAMP - INTERVAL '10 MINUTES', CURRENT_TIMESTAMP - INTERVAL '8 MINUTES', CURRENT_TIMESTAMP, 10, true);
