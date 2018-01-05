BEGIN;

DROP TABLE IF EXISTS countries cascade;

CREATE TABLE countries (
  id SERIAL PRIMARY KEY NOT NULL,
  country TEXT NOT NULL,
  img TEXT,
  popul TEXT NOT NULL,
  refugees TEXT NOT NULL,
  percent TEXT NOT NULL,
  est INTEGER
);

INSERT INTO countries (country, img, popul, refugees, percent, est) VALUES
('Turkey', 'assets/turkey.jpg','79,510,000', '2,900,000','3.64%', 1923),
('Pakistan', 'assets/pakistan.jpg', '207,774,520', '1,400,000', '0.67%', 1947),
('Lebanon', 'assets/lebanon.jpg', '6,006,668', '1,000,000', '16.6%', 1920),
('Israel', 'assets/israel.jpeg', '8,785,020', '45,000', '0.51%', 1948);

COMMIT;
