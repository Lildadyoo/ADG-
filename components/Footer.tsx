import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About ADG</h3>
            <p className="text-gray-300 mb-4">
              Action for Development Group is a Uganda-based nonprofit
              empowering communities through education, health, and sustainable
              growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Kampala, Uganda</li>
              <li>Email: info@adguganda.org</li>
              <li>Phone: +256 701 906 524</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-light pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Action for Development Group. All rights reserved.</p>
          <p className="mt-4 text-sm">
            Built with <span className="text-red-400">♥</span> by{" "}
            <span className="font-semibold text-white">Dev Jordan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

