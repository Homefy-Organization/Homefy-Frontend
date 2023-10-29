export default function Contact(){
    return(
        <div class="contact">
            <h1>Dream Home?</h1>
            <p>Thank you for getting in touch! if you find your dream home connect with us</p>
            <div>
                <form class="contact-form">
                    <div>
                        <input type="text" placeholder="Name"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <path d="M25 18.7503C29.0271 18.7503 32.2917 15.4857 32.2917 11.4587C32.2917 7.43158 29.0271 4.16699 25 4.16699C20.973 4.16699 17.7084 7.43158 17.7084 11.4587C17.7084 15.4857 20.973 18.7503 25 18.7503Z" stroke="#0FA958" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.16669 42.7087C4.16669 33.5035 12.5615 26.042 22.9167 26.042M32.2917 43.7503L42.7084 33.3337L38.5417 29.167L28.125 39.5837V43.7503H32.2917Z" stroke="#0FA958" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div>
                        <input type="email" placeholder="Email"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="34" viewBox="0 0 42 34" fill="none">
                        <path d="M41.6667 4.16667C41.6667 1.875 39.7917 0 37.5 0H4.16667C1.875 0 0 1.875 0 4.16667V29.1667C0 31.4583 1.875 33.3333 4.16667 33.3333H37.5C39.7917 33.3333 41.6667 31.4583 41.6667 29.1667V4.16667ZM37.5 4.16667L20.8333 14.5833L4.16667 4.16667H37.5ZM37.5 29.1667H4.16667V8.33333L20.8333 18.75L37.5 8.33333V29.1667Z" fill="#0FA958"/>
                        </svg>
                    </div>
                    <div>
                        <input type="text" placeholder="Phone"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <path d="M8.4375 43.75C7.8125 43.75 7.29167 43.5417 6.875 43.125C6.45833 42.7083 6.25 42.1875 6.25 41.5625V33.125C6.25 32.6736 6.40625 32.2653 6.71875 31.9C7.03125 31.5347 7.43056 31.2833 7.91667 31.1458L15.1042 29.6875C15.5903 29.6181 16.0854 29.6618 16.5896 29.8188C17.0937 29.9757 17.5014 30.2097 17.8125 30.5208L22.7083 35.4167C24.0278 34.6528 25.2778 33.8104 26.4583 32.8896C27.6389 31.9688 28.7674 30.9708 29.8437 29.8958C30.9896 28.7847 32.0403 27.6299 32.9958 26.4313C33.9514 25.2326 34.7757 23.9917 35.4687 22.7083L30.4167 17.6042C30.1389 17.3264 29.9479 16.9965 29.8437 16.6146C29.7396 16.2326 29.7222 15.7639 29.7917 15.2083L31.1458 7.91668C31.2153 7.46529 31.441 7.07431 31.8229 6.74376C32.2049 6.4132 32.6389 6.24862 33.125 6.25001H41.5625C42.1875 6.25001 42.7083 6.45834 43.125 6.87501C43.5417 7.29168 43.75 7.81251 43.75 8.43751C43.75 12.7778 42.8035 17.066 40.9104 21.3021C39.0174 25.5382 36.3354 29.3924 32.8646 32.8646C29.3924 36.3368 25.5382 39.0195 21.3021 40.9125C17.066 42.8056 12.7778 43.7514 8.4375 43.75Z" fill="#0FA958"/>
                        </svg>
                    </div>
                    <div>
                        <input type="text" placeholder="Message"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <path d="M19.6562 22C19.6562 22.6216 19.9032 23.2177 20.3427 23.6573C20.7822 24.0968 21.3784 24.3438 22 24.3438C22.6216 24.3438 23.2177 24.0968 23.6573 23.6573C24.0968 23.2177 24.3437 22.6216 24.3437 22C24.3437 21.3784 24.0968 20.7823 23.6573 20.3427C23.2177 19.9032 22.6216 19.6562 22 19.6562C21.3784 19.6562 20.7822 19.9032 20.3427 20.3427C19.9032 20.7823 19.6562 21.3784 19.6562 22ZM29.4218 22C29.4218 22.6216 29.6688 23.2177 30.1083 23.6573C30.5479 24.0968 31.144 24.3438 31.7656 24.3438C32.3872 24.3438 32.9833 24.0968 33.4229 23.6573C33.8624 23.2177 34.1093 22.6216 34.1093 22C34.1093 21.3784 33.8624 20.7823 33.4229 20.3427C32.9833 19.9032 32.3872 19.6562 31.7656 19.6562C31.144 19.6562 30.5479 19.9032 30.1083 20.3427C29.6688 20.7823 29.4218 21.3784 29.4218 22ZM9.8906 22C9.8906 22.6216 10.1375 23.2177 10.5771 23.6573C11.0166 24.0968 11.6127 24.3438 12.2343 24.3438C12.8559 24.3438 13.4521 24.0968 13.8916 23.6573C14.3312 23.2177 14.5781 22.6216 14.5781 22C14.5781 21.3784 14.3312 20.7823 13.8916 20.3427C13.4521 19.9032 12.8559 19.6562 12.2343 19.6562C11.6127 19.6562 11.0166 19.9032 10.5771 20.3427C10.1375 20.7823 9.8906 21.3784 9.8906 22ZM42.1758 13.5234C41.0722 10.9014 39.4902 8.54785 37.4736 6.52637C35.4711 4.51658 33.0939 2.91905 30.4765 1.82422C27.791 0.696289 24.9394 0.125 22 0.125H21.9023C18.9433 0.139648 16.0771 0.725586 13.3818 1.87793C10.7869 2.98399 8.43192 4.58436 6.44821 6.58984C4.45114 8.60645 2.88376 10.9502 1.79978 13.5625C0.67673 16.2676 0.110323 19.1436 0.124972 22.1025C0.14154 25.4935 0.94378 28.8345 2.46872 31.8633V39.2852C2.46872 39.8809 2.70536 40.4522 3.12659 40.8734C3.54781 41.2946 4.11911 41.5312 4.71482 41.5312H12.1416C15.1704 43.0562 18.5113 43.8584 21.9023 43.875H22.0049C24.9297 43.875 27.7666 43.3086 30.4375 42.2002C33.0416 41.1184 35.41 39.5395 37.4101 37.5518C39.4267 35.5547 41.0136 33.2207 42.122 30.6182C43.2744 27.9229 43.8603 25.0566 43.875 22.0977C43.8896 19.124 43.3134 16.2383 42.1758 13.5234ZM34.7978 34.9102C31.375 38.2988 26.834 40.1641 22 40.1641H21.917C18.9726 40.1494 16.0478 39.417 13.4648 38.04L13.0547 37.8203H6.17966V30.9453L5.95993 30.5352C4.58298 27.9521 3.85056 25.0273 3.83591 22.083C3.81638 17.2148 5.67673 12.6445 9.08982 9.20215C12.498 5.75977 17.0537 3.85547 21.9218 3.83594H22.0049C24.4463 3.83594 26.8144 4.30957 29.0459 5.24707C31.2236 6.16016 33.1767 7.47363 34.8564 9.15332C36.5312 10.8281 37.8496 12.7861 38.7627 14.9639C39.7099 17.2197 40.1836 19.6123 40.1738 22.083C40.1445 26.9463 38.2353 31.502 34.7978 34.9102Z" fill="#0FA958"/>
                        </svg>
                    </div>
                    <input type="submit" class="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
}