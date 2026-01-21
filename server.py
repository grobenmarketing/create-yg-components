import http.server
import socketserver
import os

PORT = 5000

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_GET(self):
        if self.path == '/':
            self.path = '/component-gallery.html'
        return super().do_GET()

os.chdir(os.path.dirname(os.path.abspath(__file__)) or '.')

with socketserver.TCPServer(("0.0.0.0", PORT), MyHandler) as httpd:
    print(f"Serving at http://0.0.0.0:{PORT}")
    httpd.serve_forever()
