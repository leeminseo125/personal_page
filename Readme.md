# Minseo Personal Site (Nginx + Docker)

간단한 개인 페이지입니다. 정적 파일은 `site/`에, Nginx 설정은 `nginx/`에 있습니다.

## 실행 방법

1) Docker Desktop 설치 후 아래 실행

```bash
cd /Users/leeminseo/Desktop/project/stt
docker compose up -d
```

- 브라우저에서 `http://localhost:8080` 접속
- 중지: `docker compose down`

## 구조

- `site/`: 정적 사이트 (HTML/CSS/JS)
  - `index.html`, `about.html`, `contact.html`
  - `docs/`: 내부 문서 홈 (`/docs/`)
- `nginx/`: Nginx 설정
  - `nginx.conf`: 전역 설정, gzip 등
  - `site.conf`: 서버 블록, 캐싱/보안 헤더
- `docker-compose.yml`: Nginx 컨테이너로 정적 사이트 제공

## 커스터마이징

- 이름/카피: `site/index.html`, `site/about.html`
- 스타일: `site/styles.css`
- 연락 메일: `site/main.js`의 `you@example.com` 변경
- 내부 문서: `site/docs/` 아래 HTML 추가 (기본은 검색 제외)

## 배포 팁

- S3+CloudFront, Vercel, Netlify로도 쉽게 호스팅 가능
- Nginx 사용 시 `site/`를 `/usr/share/nginx/html`로 마운트

License: MIT


