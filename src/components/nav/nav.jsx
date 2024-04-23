import React, { useState } from 'react';
import swal from 'sweetalert';
import DesktopLogo from '../../assets/images/logo-desktop.webp';
import XLogo from '../../assets/images/x-logo.webp';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBuyurtmaClick = () => {
    swal({
      title: 'Kursga buyurtma berish',
      text: 'S.M.A.R.T kursiga yozilish va buyurtma berish uchun quyidagi raqam bilan bog`laning: 88-136-51-41',
      icon: 'success',
      buttons: {
        telefon: {
          text: 'Telefon',
          value: true,
          className: 'custom-swal-button',
        },
        cancel: {
          text: 'Bekor qilish',
          value: false,
          className: 'custom-swal-button',
        },
      },
    }).then((confirmed) => {
      if (confirmed) {
        window.location.href = 'tel:+998881365141';
      }
    });
  };

  return (
    <nav className="bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={'/'} className="flex-shrink-0">
            <img className="h-14 sm:hidden" src={XLogo} alt="X Logo" />
            <img className="h-12 w-35 hidden sm:block" src={DesktopLogo} alt="Logo" />
          </Link>
          <div className="">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={handleBuyurtmaClick}
                className="
                  text-purple-900 
                  bg-custom-yellow 
                  hover:bg-yellow-400 
                  sm:text-lg
                  px-3 py-2 rounded-md 
                  text-sm 
                  text-center 
                  font-medium 
                  text-base"
              >
                Kursga buyurtma berish
              </button>
              <Link
                to="/about"
                className="
                  text-purple-900 
                  bg-custom-yellow 
                  hover:bg-yellow-400 
                  sm:text-lg
                  px-3 py-2 rounded-md 
                  text-sm 
                  text-center 
                  font-medium 
                  text-base"
              >
                Kurs haqida
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}