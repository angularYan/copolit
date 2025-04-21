CREATE OR REPLACE TYPE city_type AS OBJECT (
    city_name VARCHAR2(100),
    country VARCHAR2(100),
    latitude NUMBER,
    longitude NUMBER
);